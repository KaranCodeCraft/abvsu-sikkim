import {
    AcademicCapIcon,
    ClipboardDocumentListIcon,
    PaperAirplaneIcon,
    MagnifyingGlassIcon,
    EnvelopeOpenIcon,
    UserPlusIcon,
    RocketLaunchIcon,
    QuestionMarkCircleIcon,
  } from "@heroicons/react/24/outline";
  
  const steps = [
    {
      title: "Step 1: Explore Our Programs",
      description:
        "Browse our diverse programs to find one that aligns with your interests and career goals. Each program page offers detailed insights on curriculum, faculty, and potential career paths.",
      icon: MagnifyingGlassIcon,
      important: true,
    },
    {
      title: "Step 2: Prepare Your Application",
      description:
        "Gather required documents, including test scores. Ensure you meet the program-specific eligibility criteria before proceeding.",
      icon: ClipboardDocumentListIcon,
    },
    {
      title: "Step 3: Submit Your Application",
      description:
        "Complete and submit the online application form via our portal. You may also submit a physical form if you reside nearby. Please note that application or registration fees may apply depending on the program.",
      icon: PaperAirplaneIcon,
    },
    {
      title: "Step 4: Application Review",
      description:
        "Our admissions team will evaluate your application. You may be contacted if further details or clarification are needed.",
      icon: AcademicCapIcon,
    },
    {
      title: "Step 5: Decision Notification",
      description:
        "You will receive an official admission decision via email or post. Accepted students will be provided enrollment guidelines.",
      icon: EnvelopeOpenIcon,
    },
    {
      title: "Step 6: Enrollment and Orientation",
      description:
        "Confirm your enrollment by submitting required documents and fees. Attend the orientation program to become familiar with our campus and resources.",
      icon: UserPlusIcon,
    },
    {
      title: "Step 7: Start Your Journey",
      description:
        "Begin your academic journey with confidence. Participate in classes, connect with peers and faculty, and take full advantage of the opportunities available.",
      icon: RocketLaunchIcon,
    },
  ];
  
  export default function AdmissionProcess() {
    return (
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Admission Process</h2>
            <p className="text-lg text-gray-600 mt-2">
              Our streamlined and user-friendly process ensures you can focus on finding the perfect program.
            </p>
          </div>
          <ol className="space-y-10">
            {steps.map((step, index) => (
              <li key={index} className={`relative pl-14 ${step.important ? "bg-yellow-50 p-4 rounded-xl" : ""}`}>
                <step.icon className="w-8 h-8 absolute left-0 top-1 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                <p className="text-gray-600 mt-1">{step.description}</p>
              </li>
            ))}
          </ol>
  
          <div className="mt-12 border-t pt-8">
            <div className="flex items-start gap-3">
              <QuestionMarkCircleIcon className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Need Assistance?</h3>
                <p className="text-gray-600 mt-1">
                  If you have any questions or need support during any step of the admission process, please don’t hesitate
                  to contact our admissions office&nbsp;
                  <a
                    href="/contact"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  