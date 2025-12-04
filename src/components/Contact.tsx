import { useState } from "react";
import { MapPin, Phone, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string) => {
  const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
  return phone.length >= 10 && phoneRegex.test(phone.replace(/\s/g, ''));
};

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    phone: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    moveDate: "",
    moveSize: "",
    message: "",
    consent: false,
  });

  const handleEmailBlur = () => {
    if (formData.email && !validateEmail(formData.email)) {
      setErrors(prev => ({ ...prev, email: true }));
    } else {
      setErrors(prev => ({ ...prev, email: false }));
    }
  };

  const handlePhoneBlur = () => {
    if (formData.phone && !validatePhone(formData.phone)) {
      setErrors(prev => ({ ...prev, phone: true }));
    } else {
      setErrors(prev => ({ ...prev, phone: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailValid = validateEmail(formData.email);
    const phoneValid = validatePhone(formData.phone);

    if (!emailValid || !phoneValid) {
      setErrors({
        email: !emailValid,
        phone: !phoneValid,
      });
      toast({
        title: "Invalid Input",
        description: "Please check your email and phone number.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to be contacted before submitting.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    try {
      // Send the form to FormSubmit.co AJAX endpoint using JSON
      const endpoint = "https://formsubmit.co/ajax/f.zitouni@sf-moving.com";

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        moveDate: formData.moveDate,
        moveSize: formData.moveSize,
        message: formData.message,
        _subject: "Website Quote Request - S&F Moving",
        _captcha: "false",
      };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Parse JSON response from FormSubmit
      let json: any;
      try {
        json = await res.json();
      } catch (parseErr) {
        const raw = await res.text();
        throw new Error(`Invalid response from FormSubmit: ${raw}`);
      }

      // Log response for debugging
      // eslint-disable-next-line no-console
      console.log("FormSubmit response status:", res.status);
      // eslint-disable-next-line no-console
      console.log("FormSubmit response:", json);

      // Check for success (FormSubmit returns success: true or "true")
      if (!res.ok || json.success === "false" || json.success === false) {
        const msg = json.message || `Status ${res.status}`;
        throw new Error(msg);
      }

      toast({
        title: "Quote Request Sent",
        description: "Thank you — your message was sent. We'll contact you shortly.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        moveDate: "",
        moveSize: "",
        message: "",
        consent: false,
      });
      setErrors({ email: false, phone: false });
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err);
      toast({
        title: "Submission Error",
        description: "There was an error sending your message. Please try again or email f.zitouni@sf-moving.com directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Request a Quote
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with us for a free, no-obligation quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-primary/20">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a href="tel:+15107037904" className="text-muted-foreground hover:text-primary transition-colors block">
                      +1 (510) 703-7904
                    </a>
                    <a href="tel:+15104215953" className="text-muted-foreground hover:text-primary transition-colors block">
                      +1 (510) 421-5953
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-primary/20">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:f.zitouni@sf-moving.com" className="text-muted-foreground hover:text-primary transition-colors">
                      f.zitouni@sf-moving.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-primary/20">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground">
                      366 Euclid Ave<br />
                      Oakland, CA 94610
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-primary/20">
                  <User className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Manager</p>
                    <p className="text-muted-foreground">Fadhel Zitouni</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-lg overflow-hidden border-2 border-primary/20 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.5427794944887!2d-122.26085842346489!3d37.82958101029999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f86b5c3c0c0c5%3A0x1234567890abcdef!2s366%20Euclid%20Ave%2C%20Oakland%2C%20CA%2094610!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="S&F Moving location map showing 366 Euclid Ave, Oakland, CA"
              ></iframe>
            </div>
          </div>

          {/* Quote Form */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-background rounded-xl border-2 border-primary/20">
              <div>
                <Label htmlFor="name" className="text-foreground">Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground flex items-center gap-1">
                  Email *
                  {errors.email && <span className="text-destructive text-lg leading-none">*</span>}
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors(prev => ({ ...prev, email: false }));
                  }}
                  onBlur={handleEmailBlur}
                  className={`mt-2 transition-all ${errors.email ? 'border-destructive border-2 animate-pulse' : ''}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">Please enter a valid email address</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground flex items-center gap-1">
                  Phone *
                  {errors.phone && <span className="text-destructive text-lg leading-none">*</span>}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors(prev => ({ ...prev, phone: false }));
                  }}
                  onBlur={handlePhoneBlur}
                  className={`mt-2 transition-all ${errors.phone ? 'border-destructive border-2 animate-pulse' : ''}`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">Please enter a valid phone number</p>
                )}
              </div>

              <div>
                <Label htmlFor="service" className="text-foreground">Service</Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger id="service" className="mt-2">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="all-service">All Service Moving</SelectItem>
                    <SelectItem value="heavy-lifting">Heavy Lifting Loading</SelectItem>
                    <SelectItem value="furniture-assembly">Furniture Assembly</SelectItem>
                    <SelectItem value="trash-removal">Trash Furniture Removal</SelectItem>
                    <SelectItem value="cleaning">Cleaning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="moveDate" className="text-foreground">Move Date</Label>
                  <Input
                    id="moveDate"
                    type="date"
                    value={formData.moveDate}
                    onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="moveSize" className="text-foreground">Move Size</Label>
                  <Select value={formData.moveSize} onValueChange={(value) => setFormData({ ...formData, moveSize: value })}>
                    <SelectTrigger id="moveSize" className="mt-2">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 min-h-32"
                  placeholder="Tell us about your moving needs..."
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                />
                <Label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                  I consent to being contacted by S&F Moving regarding my quote request
                </Label>
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request a Quote"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
