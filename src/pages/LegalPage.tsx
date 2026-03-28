export const LegalPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-5 lg:px-10 py-12 sm:py-20">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-8">
          Legal Notice
        </h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Company Information</h2>
            <div className="space-y-2">
              <p><strong>Business Name:</strong> S&F Moving</p>
              <p><strong>Address:</strong> 366 Euclid Ave, Oakland, CA 94610</p>
              <p><strong>Phone:</strong> +1 (510) 703-7904 | +1 (510) 421-5953</p>
              <p><strong>Email:</strong> f.zitouni@sf-moving.com</p>
              <p><strong>Manager:</strong> Fadhel Zitouni</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">License & Insurance</h2>
            <p className="leading-relaxed">
              S&F Moving is fully licensed and insured to operate as a professional moving company in the State of California and the Bay Area region. We maintain comprehensive liability insurance and workers' compensation coverage to protect our clients and employees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Website Terms of Use</h2>
            <div className="space-y-4">
              <p className="leading-relaxed">
                This website and its content are provided by S&F Moving "as is" without any warranties, expressed or implied. The user assumes all responsibility and risk for the use of this website.
              </p>
              <p className="leading-relaxed">
                S&F Moving reserves the right to modify, suspend, or discontinue the website or any portion thereof at any time. We will not be liable for any modifications or inconvenience caused by such changes.
              </p>
              <p className="leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of S&F Moving or its content suppliers and is protected by international copyright laws.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
            <p className="leading-relaxed">
              In no event shall S&F Moving be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use the website or services, even if advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
            <p className="leading-relaxed">
              These legal notices shall be governed by and construed in accordance with the laws of the State of California, without regard to conflicts of law principles. Any dispute arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts located in Alameda County, California.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Links</h2>
            <p className="leading-relaxed">
              This website may contain links to third-party websites. S&F Moving is not responsible for the content, accuracy, or practices of external websites. Access to third-party websites is at the user's own risk and subject to the terms and conditions of those websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer of Warranties</h2>
            <p className="leading-relaxed">
              The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and current, S&F Moving makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or information contained therein.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact for Legal Inquiries</h2>
            <p className="leading-relaxed">
              For any legal inquiries or concerns regarding this website or S&F Moving services, please contact us at f.zitouni@sf-moving.com or call +1 (510) 703-7904.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-primary/20">
            <p className="text-sm text-muted-foreground">
              Last updated: March 2026. S&F Moving reserves the right to update these legal notices at any time without notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
