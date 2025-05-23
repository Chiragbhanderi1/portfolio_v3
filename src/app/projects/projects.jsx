const projects = [
  {
    description: "Laravel",
    title: "Pretty Printers",
    tech: ["laravel", "sql", "tailwind"],
    src: "/assets/images/pretty-printers.png",
    gallery: [
      "/assets/images/pretty-printers.png",
      "/assets/images/pretty-printers2.png",
      "/assets/images/pretty-printers3.png",
    ],
    content: () => {
      return (
        <p>
          <b>Pretty Printers</b> is a comprehensive administrative platform
          built to streamline the operations of printer services and new
          equipment installations. Designed for both <b>admin</b> and{" "}
          <b>staff users</b>, it empowers teams to efficiently handle daily
          tasks, manage contracts, and oversee complete workflows.
          <br /> <br />
          The system enables the creation of <b>professional Quotes</b> and{" "}
          <b>Purchase Orders</b> with automated <b>PDF generation</b>. It also
          features a dynamic <b>Dashboard</b> that highlights{" "}
          <b>today's tasks</b> for staff, keeping operations organized and on
          track.
          <br />
          With built-in <b>automation tools</b>, the platform can automatically
          send quotes and purchase orders to clients, reducing manual effort and
          increasing turnaround time. The system further manages the entire
          lifecycle of <b>contracts</b> and <b>work orders</b>, making it an
          essential tool for any organization involved in printer maintenance
          and installation services.
          <br /> <br />
          <b>Key Features:</b>
          <br />
          - Admin and Staff roles
          <br />
          - Quote and Purchase Order PDF generation
          <br />
          - Dashboard with today’s tasks
          <br />
          - Automated sending of quotes and orders
          <br />
          - Full workflow management for contracts and work orders
          <br />
        </p>
      );
    },
  },
  {
    description: "Next.js",
    title: "VaultFlow AI",
    tech: ["nextjs", "react", "tailwind", "chatgpt"],
    gallery: [
      "/assets/images/vaultflow.png",
      "/assets/images/vaultflow2.png",
      "/assets/images/vaultflow1.png",
    ],
    src: "/assets/images/vaultflow2.png",
    content: () => {
      return (
        <p>
          A sophisticated Next.js frontend application designed for the Finance
          & Banking sector, featuring advanced AI capabilities for document
          processing and information retrieval.
          <br />
          <br />
          The platform allows users to <b>upload files and folders</b> while
          perfectly maintaining the original folder structure, with intuitive{" "}
          <b>keyboard shortcuts</b> and <b>drag-to-select</b> functionality for
          seamless navigation.
          <br />
          <br />
          The integrated AI search enables users to{" "}
          <b>query specific documents or folders</b>, with the system returning
          precise information extracted from PDFs. Results include{" "}
          <b>highlighted references</b> within the original documents for easy
          verification.
          <br />
          <br />A unique <b>question grid feature</b> allows banks to create
          sets of common questions that can be applied to multiple documents
          simultaneously, streamlining the research process across multiple
          financial documents.
          <br />
          <br />
          The application combines <b>modern UI principles</b> with{" "}
          <b>banking-grade security</b> to deliver a powerful yet user-friendly
          experience for financial professionals needing to quickly extract
          insights from complex documents.
        </p>
      );
    },
  },
  {
    description: "React",
    title: "Citynect.in",
    tech: ["react", "bootstrap"],
    gallery: [
      "/assets/images/citynect.png",
      "/assets/images/citynect2.png",
      "/assets/images/citynect3.png",
    ],
    src: "/assets/images/citynect.png",
    ctaLink: "https://citynect.in",
    content: () => {
      return (
        <p>
          Citynect is a modern real estate platform designed to simplify the
          connection between property owners and tenants with minimal or no
          brokerage involved. It offers a seamless, intuitive experience through
          a clean, engaging user interface and a highly responsive user journey.
          <br /> <br />
          Citynect enables property owners to <b>
            register their properties
          </b>{" "}
          for sale or rent effortlessly. For users looking to <b>buy or rent</b>
          , the platform provides an extensive listing of properties, making it
          easy to find the perfect match. Additional features like{" "}
          <b>bookmarking</b> and <b>reporting</b> empower users to keep track of
          favorite properties or flag any concerns.
          <br />
          Access to detailed property information is available through a{" "}
          <b>subscription-based model</b>, ensuring quality and serious
          inquiries. Citynect also incorporates <b>map integration</b>, allowing
          users to <b>view properties geographically</b> based on applied search
          filters for better location context.
          <br /> <br />
          Moreover, the platform offers <b>smart suggestions</b> tailored to
          each user's requirements, helping them discover the most suitable
          options quickly and efficiently.
          <br /> <br />
          With its <b>modern UI</b>, <b>advanced search capabilities</b>, and{" "}
          <b>personalized experience</b>, Citynect transforms the traditional
          property discovery process into a streamlined and delightful journey.
        </p>
      );
    },
  },
  {
    description: "Zoho Creator",
    title: "Insurance Policy Portal",
    tech: ["creator", "zoho"],
    gallery: [
      "/assets/images/insurance2.png",
      "/assets/images/insurance3.png",
    ],
    src: "/assets/images/insurance2.png",
    content: () => {
      return (
        <p>
          A comprehensive Zoho Creator application serving both administrators
          and policyholders for complete insurance policy lifecycle management.
          <br />
          <br />
          Enables users to <b>purchase policies seamlessly</b> with integrated{" "}
          <b>Dime payments</b> for secure online transactions, supporting
          multiple payment methods including cards and net banking.
          <br />
          <br />
          Features <b>family management</b> allowing policyholders to add
          dependents and <b>share policy access</b> with family members through
          configurable permission levels.
          <br />
          <br />
          Automated <b>monthly premium collection</b> system with payment retry
          logic, failure notifications, and grace period handling to ensure
          continuous coverage.
          <br />
          <br />
          Admin portal provides complete <b>policy management</b>,{" "}
          <b>claims processing</b>, and <b>financial reporting</b> with Zoho
          CRM integration for business insights.
          <br />
          <br />
          Includes <b>document generation</b> for policy certificates,{" "}
          <b>auto-reminders</b> for renewals, and <b>self-service portals</b>{" "}
          for claims submission and status tracking.
        </p>
      );
    },
  },
  {
    description: "Tailwind",
    title: "MPH Safety",
    tech: ["html", "tailwind", "javascript", "gsap"],
    gallery: [
      "/assets/images/mphsafety2.png",
      "/assets/images/mphsafety.png",
      "/assets/images/mphsafety3.png",
    ],
    src: "/assets/images/mphsafety.png",
    ctaLink: "https://mphsafety.com",
    content: () => {
      return (
        <p>
          A visually striking landing page for New York's 5-Hour Online
          Pre-Licensing Course, combining modern design with engaging
          interactive elements.
          <br />
          <br />
          The page features <b>smooth parallax scrolling effects</b> that create
          depth and visual interest as users navigate through the course
          information, enhancing user engagement and time-on-page metrics.
          <br />
          <br />
          Implemented with <b>Tailwind CSS</b> for efficient styling and{" "}
          <b>custom animations</b>
          to highlight key course features and benefits, making the mandatory
          pre-licensing content feel dynamic and appealing.
          <br />
          <br />
          The design focuses on <b>clear information hierarchy</b> to guide
          potential students through course details, requirements, and
          registration process, while maintaining compliance with New York's DMV
          regulations.
          <br />
          <br />
          Mobile-responsive with <b>performance-optimized animations</b> that
          work seamlessly across devices, ensuring accessibility for all users
          regardless of their device or connection speed.
        </p>
      );
    },
  },
  
  {
    description: "Sales IQ",
    title: "Sales IQ Chat Automation",
    tech: ["salesiq", "zoho"],
    gallery: [
      "/assets/images/chatbot2.png",
      "/assets/images/chatbot.png",
      "/assets/images/chatbot3.png",
    ],
    src: "/assets/images/chatbot.png",
    content: () => {
      return (
        <p>
          An intelligent chat box solution implemented in Zoho Sales IQ designed
          to streamline customer support operations and significantly reduce
          manual workload through smart automation.
          <br />
          <br />
          The system handles <b>routine customer queries automatically</b>,
          including frequently requested tasks like
          <b>certificate generation</b> and distribution, providing instant
          resolutions without human intervention.
          <br />
          <br />
          Features seamless <b>escalation to human agents</b> when queries
          exceed bot capabilities, with automatic
          <b>ticket creation in Zoho Desk</b> for complex issues, ensuring no
          customer request goes unanswered.
          <br />
          <br />
          The solution includes <b>pre-built conversation flows</b> for common
          support scenarios, <b>natural language processing</b>
          to understand customer intent, and{" "}
          <b>integration with backend systems</b> to fetch real-time data for
          responses.
          <br />
          <br />
          By automating approximately <b>60-70% of routine inquiries</b>, the
          chat box has dramatically improved support team efficiency while
          maintaining high customer satisfaction scores through 24/7 instant
          responses.
        </p>
      );
    },
  },
  {
    description: "React",
    title: "LMS Admin Dashboard",
    tech: ["react", "firebase", "bootstrap"],
    gallery: [
      "/assets/images/adminpanel2.png",
      "/assets/images/adminpanel.png",
      "/assets/images/adminpanel3.png",
    ],
    ctaLink: "https://adminpaneltheame.netlify.app/#/starter",
    src: "/assets/images/adminpanel.png",
    content: () => {
      return (
        <p>
          A comprehensive admin dashboard for managing all aspects of a Learning
          Management System, built with React and powered by Firebase for
          real-time data management.
          <br />
          <br />
          Features complete <b>CRUD operations</b> for managing <b>courses</b>,{" "}
          <b>events</b>, and <b>internship programs</b>, allowing administrators
          to easily create, update, and remove content through an intuitive
          interface.
          <br />
          <br />
          Integrated with <b>Firebase Authentication</b> for secure admin access
          and <b>Firestore Database</b> for storing all LMS data, with real-time
          updates reflected across the platform instantly.
          <br />
          <br />
          The responsive <b>Bootstrap-powered UI</b> includes data tables with
          sorting and filtering capabilities, modal forms for content editing,
          and visual analytics to track platform engagement and user progress.
          <br />
          <br />
          Special features include <b>bulk import/export</b> functionality for
          course content, <b>role-based access control</b>, and{" "}
          <b>automated notifications</b> for important system events or content
          updates.
        </p>
      );
    },
  },
  {
    description: "Express & Firebase Backend System",
    title: "LMS Backend",
    tech: ["express", "firebase", "node"],
    gallery: ["/assets/images/lmsbackend.png"],
    src: "/assets/images/lmsbackend.png",
    content: () => {
      return (
        <p>
          A robust backend system powering Techno IT Hub, built with Express.js
          and Firebase, designed to create a scalable learning platform for
          technology students.
          <br />
          <br />
          The system features comprehensive <b>RESTful APIs</b> for managing
          educational content, including <b>course creation</b> and{" "}
          <b>internship program management</b>, providing structured learning
          pathways for students in various tech domains.
          <br />
          <br />
          Integrated with <b>Firebase Firestore</b> for efficient data storage
          and retrieval, and <b>Firebase Storage</b> for handling course
          materials and images, ensuring reliable performance even with growing
          user base and content volume.
          <br />
          <br />
          The backend architecture supports <b>user authentication</b>,{" "}
          <b>content management</b>, and <b>progress tracking</b>, enabling
          students to seamlessly navigate through courses and internship
          opportunities while maintaining data integrity and security.
          <br />
          <br />
          Designed with <b>scalability</b> in mind, the system can accommodate
          increasing numbers of concurrent users and expanding course catalogs,
          making it ideal for educational institutions looking to grow their
          tech training programs.
        </p>
      );
    },
  },
];

export default projects;
