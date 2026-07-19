import ClusteraUpload from '../assets/project_images/Clustera-images/UploadPage.JPG';
import ClusteraLDA1 from '../assets/project_images/Clustera-images/LDApage1.JPG';
import ClusteraLDA2 from '../assets/project_images/Clustera-images/LDApage2.JPG';
import ClusteraLDA3 from '../assets/project_images/Clustera-images/LDApage3.JPG';
import ClusteraLDA4 from '../assets/project_images/Clustera-images/LDApage4.JPG';
import ClusteraLDA5 from '../assets/project_images/Clustera-images/LDApage5.JPG';
import ClusteraLDA6 from '../assets/project_images/Clustera-images/LDApage6.JPG';
import ClusteraLDA7 from '../assets/project_images/Clustera-images/LDApage7.JPG';
import ClusteraLDA8 from '../assets/project_images/Clustera-images/LDApage8.JPG';
import ClusteraLDA9 from '../assets/project_images/Clustera-images/LDApage9.JPG';
import ClusteraLDA10 from '../assets/project_images/Clustera-images/LDApage10.JPG';
import ClusteraLDA11 from '../assets/project_images/Clustera-images/LDApage11.JPG';
import TestImage from '../assets/project_images/Test.JPG';
import Interpreter1 from '../assets/project_images/LOLCode-Interpreter-images/interpreter1.png';
import TrackIt1 from '../assets/project_images/TrackIt-images/TrackItPage1.JPG';
import TrackIt2 from '../assets/project_images/TrackIt-images/TrackItPage2.JPG';
import TrackIt3 from '../assets/project_images/TrackIt-images/TrackItPage3.JPG';
import TrackIt4 from '../assets/project_images/TrackIt-images/TrackItPage4.JPG';

const data = {
    name: '',
    image: '',
    username: '',
    keywords:
        'Rd, ',
    profession: '',
    intro:
        '',
    about:
        '',
    website: '',
    projects: [
        {
            name: 'Clustera',
            images:
                [
                    ClusteraUpload,
                    ClusteraLDA1,
                    ClusteraLDA2,
                    ClusteraLDA3,
                    ClusteraLDA4,
                    ClusteraLDA5,
                    ClusteraLDA6,
                    ClusteraLDA7,
                    ClusteraLDA8,
                    ClusteraLDA9,
                    ClusteraLDA10,
                    ClusteraLDA11,
                ],
            about:
                "A web application made with React and Django that serves as a tool for document or textual analysis, utilizing topic techniques for classification, clustering and generation of topics. This is a Special Problem which is one of the finalrequirements to finish the Computer Science program of UPLB, which is equivalent to a thesis or Capstone Project.",
            tech: ['React', 'D3.js', 'Tailwind', 'Django', 'AWS'],
            links: {
                Live: '',
                Github: 'https://github.com/thirdweb-dev',
            },
            role: 'Developer Relations Engineer',
        },
        {
            name: 'Social Media Application',
            images: [TestImage, TestImage, TestImage, TestImage],
            about:
                'A Social Media application mirroring Facebook which can create, update, delete, and read posts. Created using React.js for the frontend and Node.js and Express for the backend, implementing full CRUD operations.',
            tech: ['React', 'Node.js', 'Express.js',],
            links: {
                Live: '',
            },
            role: 'Fullstack web3 developer',
        },
        {
            name: 'LOL Code Interpreter',
            images: [Interpreter1],
            about: 'An Interpreter made with Python for the programming language LOL. It has a Graphical User Interface, Lexical Analyzer and Syntax Analyze',
            tech: ['Python'],
            links: {
                GitHub: 'https://github.com/candypay',
                Live: '',
            },
            role: 'Fullstack web3 developer',
        },
        {
            name: 'Financial Tracker',
            images: [
                TrackIt1,
                TrackIt2,
                TrackIt3,
                TrackIt4,
            ],
            about: "TrackIt: An online web application that allows users to track and visualize their overall expenses. The application is built using Next.js and Tailwind CSS for the frontend, with D3.js for visualization components. The backend is developed using Java Spring Boot, providing RESTful API services along with JWT authentication and authorization. PostgreSQL is used as the database to store user data and expenses.",
            tech: ['Next.js', 'D3.js', 'Tailwind', 'Spring Boot', 'PostgreSQL'],

            links: {
                GitHub: 'https://github.com/candypay',
                Live: '',
            },
            role: 'Fullstack web3 developer',
        },
    ],
    links: [
        {
            name: 'GitHub',
            icon: 'github.svg',
            link: 'https://github.com/avneesh0612',
        },

    ],
};

export default data;
