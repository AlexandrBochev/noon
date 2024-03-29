import { Player } from "@lottiefiles/react-lottie-player"
import lottieSlideGrid from '../../library/lottie/lottie slide grid.json'
import { useEffect } from "react"

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section>
        <div className="relative pt-37 md:pt-67 pb-20 md:pb-40">
          <Player
            autoplay
            loop
            src={lottieSlideGrid}
            className="absolute top-14 lg:top-24 left-0 w-full h-full lottie -z-10"
          />

          <h1 className="text-center text-[36px] lg:text-[58px]">
            Terms of Use
          </h1>
        </div>
      </section>

      <section className="container lg:px-0 max-w-205 mx-auto">
        <article className="mb-12.5 lg:mb-25">
          <h2 className="text-xl lg:text-4xl mb-12.5 lg:mb-10">
            LinkedIn Group Messages: The Key Ingredient
          </h2>

          <p className="lg:text-lg opacity-60">
            Scale AI, Inc. and The University of Waterloo and their affiliates (hereinafter “Licensors”) strive to enhance public access to and use of data that they collect, annotate, and publish. The data are organized in datasets (the “Datasets”) listed at http://cadcd.uwaterloo.ca/ (the “Website”). The Datasets are collections of data, managed by Licensors and provided in a number of machine-readable formats. Licensors provide any individual or entity (hereinafter You” or “Your”) with access to the Datasets free of charge subject to the terms of this agreement (hereinafter “Dataset Terms”). Use of any data derived from the Datasets, which may appear in any format such as tables, charts, devkit, documentation, or code, is also subject to these Dataset Terms. By downloading any Datasets or using any Datasets, You are agreeing to be bound by the Dataset Terms. If you are downloading any Datasets or using any Datasets for an organization, you are agreeing to these Dataset Terms on behalf of that organization. If you do not have the right to agree to these Dataset Terms, do not download or use the Datasets.
          </p>
        </article>

        <article className="mb-12.5 lg:mb-25">
          <h2 className="text-xl lg:text-4xl mb-12.5 lg:mb-10">
            Licenses
          </h2>

          <p className="lg:text-lg opacity-60">
            Unless specifically labeled otherwise, these Datasets are provided to You under a Creative Commons Attribution-NonCommercial 4.0 International Public License (“CC BY-NC 4.0”), with the additional terms included in these Dataset Terms. The CC BY-NC 4.0 may be accessed at
            <br />
            <br />
            https://creativecommons.org/licenses/by-nc/4.0/legalcode
            <br />
            <br />
            When You download or use the Datasets from the Website or elsewhere, You are agreeing to comply with the terms of CC BY-NC 4.0. Where these Dataset Terms conflict with the terms of CC BY-NC 4.0, these Dataset Terms will control.
          </p>
        </article>

        <article className="mb-12.5 lg:mb-25">
          <h2 className="text-xl lg:text-4xl mb-12.5 lg:mb-10">
            Privacy
          </h2>

          <p className="lg:text-lg opacity-60">
            This Dataset is provided for the purpose of research and education in autonomous driving and other smart city technologies. Licensors prohibit You from using the Datasets in any manner to identify or invade the privacy of any person whose personally identifiable information or personal data may have been incidentally collected in the creation of this Dataset, even when such use is otherwise legal. An individual with any privacy concerns, including a request to remove your personally identifiable information or personal data from the Dataset, may contact us by sending an e-mail to
            <br />
            <br />
            matthew.pitropov@uwaterloo.ca and kczarnec@gsd.uwaterloo.ca.
          </p>
        </article>

        <article className="mb-12.5 lg:mb-25">
          <h2 className="text-xl lg:text-4xl mb-12.5 lg:mb-10">
            Privacy
          </h2>

          <p className="lg:text-lg opacity-60">
            You may not use the name, any trademark, official mark, official emblem, or logo of either Licensor, or any of either Licensor’s other means of promotion or publicity without the applicable Licensor’s prior written consent nor in any event to represent or imply an association or affiliation with a Licensor, except as required to comply with the attribution requirements of the CC BY-NC 4.0 license.
          </p>
        </article>

        <article className="mb-12.5 lg:mb-25">
          <h2 className="text-xl lg:text-4xl mb-12.5 lg:mb-10">
            Termination
          </h2>

          <p className="lg:text-lg opacity-60">
            Licensors may terminate Your access to all or any part of the Datasets or the Website at any time, with or without cause, with or without notice, effective immediately. All provisions of the Dataset Terms which by their nature should survive termination will survive termination, including, without limitation, warranty disclaimers, indemnity, and limitations of liability.
          </p>
        </article>

        <article className="mb-12.5 lg:mb-25">
          <h2 className="text-xl lg:text-4xl mb-12.5 lg:mb-10">
            Indemnification
          </h2>

          <p className="lg:text-lg opacity-60">
            You will indemnify and hold Licensors harmless from and against any and all claims, loss, cost, expense, liability, or damage, including, without limitation, all reasonable attorneys’ fees and court costs, arising from (i) Your use or misuse of the Website or the Datasets; (ii) Your access to the Website; (iii) Your violation of the Dataset Terms; or (iv) infringement by You, or any third party using Your account, of any intellectual property or other right of any person or entity. Such losses, costs, expenses, damages, or liabilities will include, without limitation, all actual, general, special, indirect, incidental, and consequential damages.
          </p>
        </article>

        <article className="mb-12.5 lg:mb-25">
          <h2 className="text-xl lg:text-4xl mb-12.5 lg:mb-10">
            Dispute Resolution
          </h2>

          <p className="lg:text-lg opacity-60">
            These Terms of Use will be governed by and interpreted in accordance with the laws of California (excluding the conflict of laws rules thereof). All disputes under these Dataset Terms will be resolved in the applicable state or federal courts of San Francisco, California. You consent to the jurisdiction of such courts and waive any jurisdictional or venue defenses otherwise available.
          </p>
        </article>

        <article className="mb-12.5 lg:mb-25">
          <h2 className="text-xl lg:text-4xl mb-12.5 lg:mb-10">
            Miscellaneous
          </h2>

          <p className="lg:text-lg opacity-60">
            You agree that it is Your responsibility to comply with all applicable laws with respect to Your use and publication of the Datasets or derivatives thereof, including any applicable privacy, data protection, security, and export control laws. These Dataset Terms constitute the entire agreement between You and Licensors with respect to the subject matter of these Dataset Terms and supersedes any prior or contemporaneous agreements whether written or oral. If a court of competent jurisdiction finds any term of these Dataset Terms to be unenforceable, the unenforceable term will be modified to reflect the parties’ intention and only to the extent necessary to make the term enforceable. The remaining provisions of these Dataset Terms will remain in effect. You may not assign these Dataset Terms without the prior written consent of the Licensors. The Licensors may assign, transfer, or delegate any of their rights and obligations under these Dataset Terms without consent. The parties are independent contractors. No failure or delay by either party in exercising a right under these Dataset Terms will constitute a waiver of that right. A waiver of a default is not a waiver of any subsequent default. These Dataset Terms may be amended by the Licensors from time to time in our discretion. If an update affects your use of the Dataset, Licensors will notify you before the updated terms are effective for your use.
          </p>
        </article>
      </section>
    </main>
  )
}

export { TermsOfUse }