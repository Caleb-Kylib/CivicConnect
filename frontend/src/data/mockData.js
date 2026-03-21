export const bills = [
    {
        id: 'cybercrime-bill-2024',
        title: 'Computer Misuse and Cybercrimes (Amendment) Bill',
        shortDescription: 'Seeking to introduce new offenses related to online harassment and misinformation.',
        fullExplanation: 'This bill proposes amendments to the existing Cybercrimes Act to address emerging threats in the digital space. It introduces stricter penalties for cyber-bullying, publication of false information, and unauthorized access to computer systems. The goal is to enhance digital safety while balancing freedom of expression.',
        status: 'Active',
        date: '2024-05-15',
        category: 'Technology',
        keyPoints: [
            'Introduces heavy fines for spreading "fake news" that causes panic.',
            'Defines cyber-bullying more clearly with associated jail terms.',
            'Grants authorities more power to request data from service providers during investigations.',
            'Mandates reporting of cyber-security breaches by critical infrastructure providers.'
        ],
        pros: [
            'Better protection for victims of online harassment.',
            'Enhanced ability for law enforcement to track digital criminals.',
            'Clearer framework for reporting cyber-crime.'
        ],
        concerns: [
            'Potential for abuse to silence political dissent under the guise of "false information".',
            'Privacy concerns regarding increased data access for authorities.',
            'Vague definitions that might lead to selective enforcement.'
        ]
    },
    {
        id: 'data-protection-bill-2024',
        title: 'Data Protection (General Regulation) Bill',
        shortDescription: 'Operationalizing the Data Protection Act with specific rules for data handling.',
        fullExplanation: 'This regulation provides the technical details on how businesses and government agencies must handle personal data. It covers registration requirements for data controllers, rights of data subjects, and the process for reporting breaches to the Data Commissioner.',
        status: 'Upcoming',
        date: '2024-06-10',
        category: 'Privacy',
        keyPoints: [
            'Mandatory registration for all entities handling more than 50 data subjects.',
            'Strict timelines for notifying the regulator of data breaches (72 hours).',
            'Right to "be forgotten" and right to data portability for citizens.',
            'Heavy penalties up to 5,000,000 KES or 1% of annual turnover.'
        ],
        pros: [
            'Gives citizens more control over their personal information.',
            'Matches international standards (like GDPR), making Kenya a safe digital hub.',
            'Clearer rules for businesses on how to treat user data.'
        ],
        concerns: [
            'High compliance costs for small businesses and startups.',
            'Complexity of the registration process might be a barrier for informal sector.',
            'The Office of the Data Commissioner may need more resources to enforce these rules.'
        ]
    },
    {
        id: 'health-laws-amendment-2024',
        title: 'Health Laws (Amendment) Bill',
        shortDescription: 'Restructuring the management of national health insurance and facility funding.',
        fullExplanation: 'A comprehensive bill aimed at achieving Universal Health Coverage by restructuring the former NHIF into the new SHA (Social Health Authority). It changes how contributions are calculated and how private hospitals are reimbursed.',
        status: 'Passed',
        date: '2023-12-20',
        category: 'Health',
        keyPoints: [
            'Transition from NHIF to Social Health Authority (SHA).',
            'Contributions set at 2.75% of gross monthly income.',
            'Introduction of a Primary Healthcare Fund for outpatient services.',
            'Electronic health records mandatory for all accredited facilities.'
        ],
        pros: [
            'Standardized contribution rates based on ability to pay.',
            'Better funding for community health workers.',
            'Improved efficiency through digital health records.'
        ],
        concerns: [
            'Higher deductions for middle and high-income earners.',
            'Uncertainty regarding the transition period and current benefits.',
            'Transparency in the management of the new Authority funds.'
        ]
    }
];

export const rights = [
    {
        id: 'land-ownership',
        title: 'Right to Own Property (Land)',
        topic: 'Land ownership',
        explanation: 'Every person has the right to acquire and own property of any description and in any part of Kenya. This right is protected under Article 40 of the Constitution.',
        keyRights: [
            'The government cannot take your land without fair and prompt compensation.',
            'You have the right to use and develop your land within the law.',
            'Women have equal rights to inherit and own land as men.',
            'Communities can own land collectively (Community Land Act).'
        ],
        legalContext: 'Constitution of Kenya, Chapter 5 (Land and Environment).'
    },
    {
        id: 'succession',
        title: 'Inheritance and Succession',
        topic: 'Succession',
        explanation: 'Laws regulating how property is distributed after someone dies. The Law of Succession Act ensures that dependents are taken care of and property is transferred legally.',
        keyRights: [
            'You have the right to write a Will (testate succession).',
            'Surviving spouses and children have primary priority in inheritance.',
            'Daughters have equal inheritance rights as sons.',
            'If someone dies without a Will, the court determines the distribution (intestate).'
        ],
        legalContext: 'Law of Succession Act (Cap 160).'
    },
    {
        id: 'freedom-expression',
        title: 'Freedom of Expression',
        topic: 'Freedom of speech',
        explanation: 'Article 33 of the Constitution guarantees the right to freedom of expression, including the freedom to seek, receive, or impart information and ideas.',
        keyRights: [
            'Freedom of the press and other media.',
            'Freedom of artistic creativity.',
            'Freedom of academic and scientific research.',
            'Right to protest and demonstrate peacefully.'
        ],
        legalContext: 'Constitution of Kenya, Bill of Rights (Article 33).'
    },
    {
        id: 'arrest-rights',
        title: 'Rights of an Arrested Person',
        topic: 'Criminal Justice',
        explanation: 'Under Article 49, every person who is arrested has fundamental rights to ensure fair treatment by law enforcement.',
        keyRights: [
            'Right to be informed promptly of the reason for your arrest.',
            'Right to remain silent; anything you say can be used against you.',
            'Right to communicate with an advocate and your family.',
            'Right to be brought before a court within 24 hours of arrest.'
        ],
        legalContext: 'Constitution of Kenya, Bill of Rights (Article 49).'
    },
    {
        id: 'privacy-rights',
        title: 'Right to Privacy',
        topic: 'Personal Data',
        explanation: 'Article 31 protects your personal space, home, and digital communications from arbitrary search or seizure.',
        keyRights: [
            'Protection against unauthorized search of your person or home.',
            'Privacy of your communications (calls, emails, and texts).',
            'Right to know how your personal data is being used by companies.',
            'Protection from disclosure of private family or health information.'
        ],
        legalContext: 'Data Protection Act & Constitution (Article 31).'
    },
    {
        id: 'matrimonial-property',
        title: 'Matrimonial Property Rights',
        topic: 'Marriage',
        explanation: 'Governs the ownership of property acquired during marriage. Ensures that both spouses have an interest in property even if only one name is on the title.',
        keyRights: [
            'Spouses have an interest in matrimonial property according to their contribution.',
            'Contribution can be monetary or non-monetary (child care, domestic work).',
            'One spouse cannot sell the matrimonial home without the other\'s consent.',
            'Equal rights to property acquired during the union.'
        ],
        legalContext: 'Matrimonial Property Act (2013).'
    },
    {
        id: 'protest-rights',
        title: 'Right to Assemble and Protest',
        topic: 'Assembly',
        explanation: 'Article 37 guarantees every person the right, peaceably and unarmed, to assemble, to demonstrate, to picket, and to present petitions to public authorities.',
        keyRights: [
            'Right to hold peaceful demonstrations in public spaces.',
            'Right to picket and strike (especially for workers).',
            'Police are mandated to provide security for peaceful protesters.',
            'Requirement to notify the police (not "ask for permission") before the event.'
        ],
        legalContext: 'Constitution of Kenya (Article 37) & Public Order Act.'
    }
];

export const events = [
    {
        id: 'public-forum-cybercrime',
        title: 'Town Hall: Cybercrime Bill Public Participation',
        date: 'March 25, 2024 at 10:00 AM',
        location: 'Charter Hall, Nairobi / Online via Zoom',
        description: 'Come and share your views on the proposed amendments to the Computer Misuse and Cybercrimes Act. Your input is critical for shaping the future of digital safety in Kenya.',
        organizer: 'Parliamentary Committee on Communication & Information'
    },
    {
        id: 'participation-health-sha',
        title: 'SHA Transition Stakeholder Dialogue',
        date: 'April 02, 2024 at 09:00 AM',
        location: 'KICC, Nairobi',
        description: 'A focused discussion with healthcare providers and citizens on the transition from NHIF to SHA. Learn how benefits will change and how to register.',
        organizer: 'Ministry of Health'
    },
    {
        id: 'community-land-workshop',
        title: 'Community Land Rights Awareness Workshop',
        date: 'April 15, 2024 at 02:00 PM',
        location: 'Town Hall, Narok',
        description: 'Empowering local communities to understand the process of community land registration and management under the Community Land Act.',
        organizer: 'National Land Commission'
    }
];

export const educationTopics = [
    {
        id: 'how-voting-works',
        title: 'How Voting Works',
        description: 'A guide to the Kenyan electoral process, from registration to the ballot box.',
        content: 'Voting is a constitutional right for every citizen aged 18 and above. The process is managed by the Independent Electoral and Boundaries Commission (IEBC) and ensures that leadership represents the will of the people.',
        steps: [
            { title: 'Voter Registration', description: 'Ensure you have a valid ID or Passport and register at an IEBC station.' },
            { title: 'Verification', description: 'Before elections, check the register to ensure your biometric details are correct.' },
            { title: 'Election Day', description: 'Visit your polling station between 6 AM and 5 PM on the designated Tuesday in August.' },
            { title: 'Marking the Ballot', description: 'Use the provided stamp to mark your choice for all 6 elective positions.' }
        ],
        expertTips: [
            "Your vote is your secret; don't let anyone intimidate you.",
            "Report any electoral malpractices to the IEBC officials or police.",
            "Stay peaceful and wait for the official results from the commission."
        ]
    },
    {
        id: 'role-of-mps',
        title: 'Role of Members of Parliament',
        description: 'Understanding what your elected representative should actually do for you.',
        content: 'Parliament consists of the National Assembly and the Senate. Both play critical roles in governance, though their specific mandates differ slightly.',
        steps: [
            { title: 'Legislation', description: 'MPs introduce and debate bills that eventually become the laws governing the country.' },
            { title: 'Oversight', description: 'They monitor how the government spends taxpayer money and hold officials accountable.' },
            { title: 'Representation', description: 'Your MP is your voice in Nairobi; they should present your local issues on the floor.' },
            { title: 'Budget Allocation', description: 'They approve the national budget and manage the Constituency Development Fund (CDF).' }
        ],
        expertTips: [
            "You can petition your MP directly on matters of national or local concern.",
            "Attend constituency town halls to hear directly from your representative.",
            "Follow the Parliamentary Hansard to see how your MP votes on critical bills."
        ]
    },
    {
        id: 'how-laws-are-passed',
        title: 'How a Bill Becomes Law',
        description: 'The journey from a simple idea to a published Act of Parliament.',
        content: 'The legislative process is designed to be rigorous, ensuring that every law is debated and scrutinized before it affects millions of lives.',
        steps: [
            { title: 'Publication', description: 'The bill is published in the Kenya Gazette for the first time.' },
            { title: 'First Reading', description: 'The bill is formally introduced in the house without debate.' },
            { title: 'Second Reading', description: 'MPs debate the general principles and merits of the proposed law.' },
            { title: 'Committee & Participation', description: 'Detailed scrutiny occurs, and the public is invited to share their views.' },
            { title: 'Presidential Assent', description: 'If passed by the house, the President signs it into law.' }
        ],
        expertTips: [
            "The Committee stage is the best time for you to submit a memo.",
            "Check the Parliament website regularly for 'Notice of Public Participation'.",
            "A bill can be challenged in court even after the President signs it."
        ]
    }
];
