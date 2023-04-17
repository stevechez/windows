const ServicesFaq = () => {
  return (
    <div className="my-20">
      <h1 className="text-3xl font-bold text-blue-950 text-center mb-10">
        FAQs
      </h1>
      <div className="accordion flex flex-col items-center justify-center mb-6">
        {/* <!--  Panel 1  --> */}
        <div className="w-1/2">
          <input type="checkbox" name="panel" id="panel-1" className="hidden" />
          <label
            htmlFor="panel-1"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            What is the best window cleaning solution?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p
              className="text-gray-900 dark:text-gray-900 p-4 text-base"
              id="panel1"
            >
              There are many different window cleaning solutions available on
              the market, each with their own unique advantages and
              disadvantages. Some of the most popular options include:
            </p>

            <p className="text-gray-900 dark:text-gray-900 p-4 text-base">
              Vinegar and Water - A simple and affordable solution that involves
              mixing equal parts vinegar and water. This solution is effective
              at removing dirt and grime from windows and leaves them
              streak-free.
            </p>

            <p className="text-gray-900 dark:text-gray-900 p-4">
              Dish Soap and Water - Another simple and affordable solution that
              involves mixing a small amount of dish soap with water. This
              solution is effective at removing tough dirt and grime from
              windows and is gentle on the environment.
            </p>

            <p className="text-gray-900 dark:text-gray-900 p-4">
              Ammonia and Water - A powerful solution that can cut through even
              the toughest dirt and grime. However, it should be used with
              caution, as it can be harmful if ingested or inhaled.
            </p>

            <p className="text-gray-900 dark:text-gray-900 p-4">
              Commercial Window Cleaners - There are many commercial window
              cleaners available that are specifically designed for cleaning
              windows. These solutions often contain a combination of cleaning
              agents that are effective at removing dirt and grime while leaving
              windows streak-free.
            </p>

            <p className="text-gray-900 dark:text-gray-900 p-4">
              Ultimately, the best window cleaning solution will depend on the
              specific needs of your windows and the type of dirt and grime that
              needs to be removed. It&apos;s always a good idea to test a small
              area of your windows with a new solution before using it on the
              entire window to ensure that it won&apos;t cause any damage or
              leave streaks.
            </p>
          </div>
        </div>
        {/* <!--  Panel 2  --> */}
        <div className="w-1/2">
          <input type="checkbox" name="panel" id="panel-2" className="hidden" />
          <label
            htmlFor="panel-2"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            How often do windows need to be cleaned?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p className="text-gray-900 dark:text-gray-900 p-4">
              The frequency with which windows need to be cleaned can vary
              depending on several factors such as the location of the building,
              the weather conditions, and the level of traffic around the
              windows. As a general rule of thumb, it&apos;s recommended to have
              windows cleaned at least twice a year, once in the spring and once
              in the fall. However, some situations may require more frequent
              cleaning.
            </p>

            <p className="text-gray-900 dark:text-gray-900 p-4">
              For example, buildings located near busy roads or construction
              sites may accumulate dirt and grime more quickly and therefore
              require more frequent cleaning. Similarly, buildings located in
              areas with high humidity or close to the ocean may accumulate salt
              deposits, which can damage windows if left uncleaned, requiring
              more frequent cleaning. Additionally, some commercial and
              industrial facilities may require more frequent cleaning due to
              safety regulations or industry standards.
            </p>

            <p className="text-gray-900 dark:text-gray-900 p-4">
              Ultimately, the frequency with which windows need to be cleaned
              will depend on a variety of factors unique to each building and
              situation. It&apos;s best to consult with a professional window
              cleaning company to determine the best cleaning schedule based on
              your specific needs.
            </p>
          </div>
        </div>
        {/* <!--  Panel 3  --> */}
        <div className="w-1/2">
          <input type="checkbox" name="panel" id="panel-3" className="hidden" />
          <label
            htmlFor="panel-3"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            Should I hire a professional to clean my windows?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p className="text-gray-900 dark:text-gray-900 p-4">
              While it&apos;s possible to clean windows yourself, there are
              several advantages to hiring a professional window cleaning
              company to handle the job. Here are some reasons why you may want
              to consider hiring a professional:
            </p>

            <p className="text-gray-900 dark:text-gray-900 p-4">
              Quality Results: Professional window cleaners have the experience,
              equipment, and cleaning solutions needed to achieve a
              high-quality, streak-free finish that may be difficult to achieve
              with DIY methods.
            </p>
            <p className="text-gray-900 dark:text-gray-900 p-4">
              Safety: Cleaning windows, particularly on tall buildings or
              hard-to-reach areas, can be dangerous. Professional window
              cleaners are trained and equipped to safely clean windows at
              heights and in difficult-to-reach areas.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-900 p-4">
              Time-Saving: Cleaning windows can be a time-consuming process,
              especially if you&apos;re not familiar with the proper techniques
              and tools. Hiring a professional can save you time and hassle,
              allowing you to focus on other tasks or activities.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-900 p-4">
              Long-Term Savings: Regular window cleaning can help extend the
              life of your windows by preventing buildup of dirt, grime, and
              other debris that can cause damage over time. This can save you
              money in the long run by reducing the need for expensive repairs
              or replacements.
            </p>

            <p className="mb-2 text-gray-500 dark:text-gray-900 p-4">
              Overall, hiring a professional window cleaning company can provide
              many benefits, including high-quality results, safety,
              time-saving, and long-term savings. If you&apos;re unsure whether
              professional window cleaning is right for you, consider scheduling
              a consultation with a local window cleaning company to learn more
              about the services they offer and how they can help meet your
              needs.
            </p>
          </div>
        </div>
        {/* <!--  Panel 4  --> */}
        <div className="w-1/2">
          <input type="checkbox" name="panel" id="panel-4" className="hidden" />
          <label
            htmlFor="panel-4"
            className="relative block bg-gray-200 text-black p-4 shadow border-b border-grey"
          >
            Why should you pressure your driveway?
          </label>
          <div className="accordion__content overflow-hidden border border-l-gray-400 border-r-gray-400">
            <p className="mb-2 text-gray-500 dark:text-gray-900">
              Pressure washing your driveway can provide several benefits,
              including:
            </p>

            <p className="text-gray-900 dark:text-gray-900 p-4">
              Improved Curb Appeal: Over time, driveways can accumulate dirt,
              grime, and other stains that can detract from their appearance.
              Pressure washing can help remove these stains and restore your
              driveway&apos;s original color and appearance, improving the
              overall curb appeal of your property.
            </p>
            <p className="text-gray-900 dark:text-gray-900 p-4">
              Preventative Maintenance: Dirt and grime buildup on driveways can
              also contribute to the growth of mold, mildew, and other types of
              bacteria, which can be harmful to the health of you and your
              family. Pressure washing can help prevent the growth of these
              substances and improve the overall cleanliness and safety of your
              driveway.
            </p>
            <p className="text-gray-900 dark:text-gray-900 p-4">
              Enhanced Safety: Driveways that are covered in dirt, grime, or oil
              can become slippery and hazardous, especially when wet. Pressure
              washing can help remove these substances and reduce the risk of
              slips, trips, and falls.
            </p>
            <p className="text-gray-900 dark:text-gray-900 p-4">
              Increased Property Value: Regular maintenance, including pressure
              washing, can help increase the value of your property by enhancing
              its appearance and condition.
            </p>

            <p className="text-gray-900 dark:text-gray-900 p-4">
              Overall, pressure washing your driveway is an effective and
              affordable way to maintain and improve the appearance, safety, and
              overall value of your property. It&apos;s recommended to have your
              driveway pressure washed at least once a year, or more frequently
              if you live in an area with high levels of pollution, dust, or
              dirt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesFaq;
