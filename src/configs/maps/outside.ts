import Character from '../../modules/Character';
import GameObject from '../../modules/GameObject';
import { getGridPosition, getGridCoord, createLinearWall } from '../../utils/grid';
import miniMeAnimations from '../sprites/miniMe';
import carAnimations from '../sprites/car';
import billboard from '../sprites/billboard';
import fountain from '../sprites/fountain';
import globe from '../sprites/globe';
import buildingBillboard from '../sprites/buildingBillboard';
import techskillsBillboard from '../sprites/techskillsBillboard';
import { addActions } from '../../utils/actions';
import * as interactions from '../interactions/index'; 
import bugAnimations from '../sprites/bug';

export const outside = {
    lowerImageSrc: "../images/backgrounds/exterior.png",
    gameObjects: {
        miniMe: new Character({
            x: getGridPosition(41), //x: getGridPosition(10),
            y: getGridPosition(24), //y: getGridPosition(10),
            isPlayer: true,
            hasShadow: true,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/characters/sprite-vasco.png',
                    width: 16,
                    height: 32,
                    imageWidth: 16,
                    imageHeight: 32,
                    animations: miniMeAnimations
                },
                shadow: {
                    src: '../images/characters/shadow.png',
                    width: 32,
                    height: 32,
                    imageWidth: 64,
                    imageHeight: 64
                }
            },
            isHidden: true,
        }),
        car: new Character({
            x: getGridPosition(7), //x: getGridPosition(10),
            y: getGridPosition(24), //y: getGridPosition(10),
            isPlayer: false,
            hasShadow: true,
            width: getGridPosition(1),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/characters/car.png',
                    width: getGridPosition(4),
                    height: getGridPosition(3),
                    animations: carAnimations
                },
            },
            isCameraView: true,
            speedMultiplier: 2,
        }),
        bug: new Character({
            x: getGridPosition(55), //x: getGridPosition(10),
            y: getGridPosition(20), //y: getGridPosition(10),
            isPlayer: false,
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/bug.png',
                    width: getGridPosition(1),
                    height: getGridPosition(1),
                    animations: bugAnimations
                },
            },
            isHidden: true,
        }),
        house: new GameObject({
            x: getGridPosition(64),
            y: getGridPosition(3),
            hasShadow: false,
            width: getGridPosition(4),
            height: getGridPosition(4),
            sprite: {
                object: {
                    src: '../images/objects/house.png',
                    width: getGridPosition(4),
                    height: getGridPosition(5),
                    imageWidth: 128,
                    imageHeight: 160
                },
            },
            door: {
                offsetX: getGridPosition(2),
                offsetY: getGridPosition(3),
                src: '../images/doors/door-house.png',
                width: getGridPosition(1),
                height: getGridPosition(2),
            }
        }),
        // TECH SKILLS Building
        techSkillsMuseum: new GameObject({
            x: getGridPosition(44),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(8),
            height: getGridPosition(5),
            sprite: {
                object: {
                    src: '../images/objects/museum2.png',
                    width: getGridPosition(8),
                    height: getGridPosition(6),
                },
            },
            door: {
                offsetX: getGridPosition(0),
                offsetY: getGridPosition(4),
                src: '../images/doors/door-techskills.png',
                width: getGridPosition(3),
                height: getGridPosition(2),
            }
        }),
        techskillsBillboard: new GameObject({
            x: getGridPosition(47),
            y: getGridPosition(12.5),
            hasShadow: false,
            width: getGridPosition(5),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/techskills-billboard.png',
                    width: getGridPosition(5),
                    height: getGridPosition(3),
                    animations: techskillsBillboard
                },
            },
        }),
        signEduExp: new GameObject({
            x: getGridPosition(44),
            y: getGridPosition(20),
            hasShadow: false,
            width: getGridPosition(3),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/sign-outside.png',
                    width: getGridPosition(3),
                    height: getGridPosition(3),
                },
            },
        }),
        // Education Building
        college: new GameObject({
            x: getGridPosition(43),
            y: getGridPosition(-1),
            hasShadow: false,
            width: getGridPosition(12),
            height: getGridPosition(9),
            sprite: {
                object: {
                    src: '../images/objects/college.png',
                    width: getGridPosition(13),
                    height: getGridPosition(13),
                    imageWidth: getGridPosition(13),
                    imageHeight: getGridPosition(13)
                },
            },
        }),
        signCollege: new GameObject({
            x: getGridPosition(45.5),
            y: getGridPosition(4),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/sign-college.png',
                    width: getGridPosition(8),
                    height: getGridPosition(3),
                },
            },
        }),
        professor: new Character({
            x: getGridPosition(49),
            y: getGridPosition(8),
            isPlayer: false,
            hasShadow: true,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/characters/professor.png',
                    width: 16,
                    height: 32,
                    imageWidth: 16,
                    imageHeight: 32,
                    animations: miniMeAnimations
                },
                shadow: {
                    src: '../images/characters/shadow.png',
                    width: 32,
                    height: 32,
                    imageWidth: 64,
                    imageHeight: 64
                }
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'message',
                            text:`Professor: Hi Vasco, you're back! I kept your University Degree around. Let me see...`
                        },
                        {
                            type: 'message',
                            text:`Professor: There you go!`
                        },
                        {
                            type: 'interactionBox',
                            title: 'Computer Science Degree',
                            textLines:  [
                                `- Algorithms and Data Scructures`,
                                `- Computers Architecture`,
                                `- Logical Programming`,
                                `- Databases`,
                                `- Algorithms Complexity`,
                                `- Web Technologies`,
                                `- Functional Programming`,
                                `- Unix based systems`,
                            
                            ],
                        },
                    ]
                }
            ],
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
        }),
        //PROFESSIONAL EXPERIENCE BUILDINGS
        arkadiumBillboard: new GameObject({
            x: getGridPosition(33),
            y: getGridPosition(17.5),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/arkadium-billboard.png',
                    width: getGridPosition(6),
                    height: getGridPosition(2),
                    animations: buildingBillboard
                },
            },
        }),
        arkadium: new GameObject({
            x: getGridPosition(33),
            y: getGridPosition(13),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(6),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/arkadium.png',
                    width: getGridPosition(6),
                    height: getGridPosition(9),
                },
            },
        }),
        arkadiumInfo: new GameObject({
            x: getGridPosition(39),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/information.png',
                    width: 16,
                    height: 32,
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        // {type: 'message', text: `I'm currently working at Farfetch since 2017. My job here is to create tools and features to maximize website performance and to help developers experience`}
                        {
                            type: 'interactionBox',
                            title: 'Arkadium (Dec 2024 - Present)',
                            textLines: [
                                `Arkadium specializes in developing premium online games for a broad audience, focusing on user-friendly, accessible games that emphasize quality and enjoyment.`,
                                `I joined Arkadium as a Senior Full Stack Developer to help create engaging browser-based game arenas, leveraging Next.js, React, and Node.js to build interactive, high-performance gaming experiences.`
                            ],
                        },
                    ]
                }
            ],
        }),
        emmaBillboard: new GameObject({
            x: getGridPosition(25),
            y: getGridPosition(15.5),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/emma-billboard.png',
                    width: getGridPosition(6),
                    height: getGridPosition(2),
                    animations: buildingBillboard
                },
            },
        }),
        emma: new GameObject({
            x: getGridPosition(25),
            y: getGridPosition(11),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(8),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/emma.png',
                    width: 96,
                    height: 176
                },
            },
            door: {
                offsetX: getGridPosition(2),
                offsetY: getGridPosition(8.5),
                width: getGridPosition(2),
                height: getGridPosition(2),
                src: '../images/doors/door-building.png',
            }
        }),
        emmaInfo: new GameObject({
            x: getGridPosition(31),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/information.png',
                    width: 16,
                    height: 32,
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'interactionBox',
                            title: 'Emma (Jul 2023 - Dec 2024)',
                            textLines: [
                                `Emma is a leading company in mattress and sleep market, dedicated to optimizing sleep quality through innovative, science-backed products. `,
                                `Focused on expanding global market reach while maintaining premium quality and optimizing the online shopping experience through robust, engaging web platforms.`
                            ],
                        },
                        {
                            type: 'interactionBox',
                            title: 'Emma (Jul 2023 - Dec 2024)',
                            textLines: [
                                `At Emma, I helped streamlining the Static Site Generation process, reducing generation time through optimized scripting and cache strategies.`,
                                `I worked closely with designers and product managers to develop and refine UI components that bring direct value to Emma’s website, ensuring a user-centric experience.`
                            ],
                        },
                        {
                            type: 'interactionBox',
                            title: 'Emma (Jul 2023 - Dec 2024)',
                            textLines: [
                                `I collaborated with backend teams to migrate a key service and update its data model for delivery tracking, improving the site's functionality and data accuracy.`,
                            ],
                        },
                    ]
                }
            ],
        }),
        farfetchBillboard: new GameObject({
            x: getGridPosition(17),
            y: getGridPosition(15.5),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/farfetch-billboard.png',
                    width: getGridPosition(6),
                    height: getGridPosition(2),
                    animations: buildingBillboard
                },
            },
        }),
        farfetch: new GameObject({
            x: getGridPosition(17),
            y: getGridPosition(11),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(8),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/farfetch.png',
                    width: 96,
                    height: 176
                },
            },
            door: {
                offsetX: getGridPosition(2),
                offsetY: getGridPosition(8.5),
                width: getGridPosition(2),
                height: getGridPosition(2),
                src: '../images/doors/door-building.png',
            }
        }),
        farfetchInfo: new GameObject({
            x: getGridPosition(23),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/information.png',
                    width: 16,
                    height: 32,
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'interactionBox',
                            title: 'Farfetch (Sep 2017 - Jun 2023)',
                            textLines: [
                                `Farfetch operates as a global luxury fashion platform that connects customers with high-end brands and boutiques through an advanced e-commerce site and marketplace.`,
                                `The company’s strategy revolves around offering a seamless, high-quality digital shopping experience with a strong focus on personalization and cutting-edge technology to meet the demands of luxury consumers.`
                            ],
                        },
                        {
                            type: 'interactionBox',
                            title: 'Farfetch (Sep 2017 - Jun 2023)',
                            textLines:  [
                                `As a Front-End Engineer at Farfetch, I maintained core TypeScript and JavaScript tools, managed containerized deployments, and implemented testing mechanisms to ensure smooth site functionality.`,
                                `Partnering with designers and product owners, I also helped create and optimize high-traffic React components, maintaining performance and stability.`
                            ],
                        }
                    ]
                }
            ],
        }),
        dotlogicBillboard: new GameObject({
            x: getGridPosition(9),
            y: getGridPosition(16.5),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/dotlogic-billboard.png',
                    width: getGridPosition(6),
                    height: getGridPosition(2),
                    animations: buildingBillboard
                },
            },
        }),
        dotlogic: new GameObject({
            x: getGridPosition(9),
            y: getGridPosition(14),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(4),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/dotlogic.png',
                    width: 96,
                    height: 144,
                },
            },
            door: {
                offsetX: getGridPosition(2),
                offsetY: getGridPosition(4.5),
                src: '../images/doors/door-building.png',
                width: getGridPosition(2),
                height: getGridPosition(2),
            }
        }),
        dotlogicInfo: new GameObject({
            x: getGridPosition(15),
            y: getGridPosition(18),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/information.png',
                    width: 16,
                    height: 32,
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        // {type: 'message', text: `I'm currently working at Farfetch since 2017. My job here is to create tools and features to maximize website performance and to help developers experience`}
                        {
                            type: 'interactionBox',
                            title: 'DotLogic (Sep 2016 - Sep 2017)',
                            textLines: [
                                `At Dotlogic, I worked as a developer for a year in 2016. The company specializes in developing medical software for hospitals, with a focus on cardiology.`,
                                `I began my time at Dotlogic as a professional intern, where I had the opportunity to create a tool using Javascript and Canvas to read and display ECG data on the page`
                            ],
                        },
                        {
                            type: 'interactionBox',
                            title: 'DotLogic (Sep 2016 - Sep 2017)',
                            textLines:  [
                                `After my internship, I was offered a full-time position at the company and continued to help improve various web tools.`,
                                `Working at Dotlogic provided me with valuable experience in the healthcare industry and solidified my skills in Javascript and web development.`
                            ],
                        },
                    ]
                }
            ],
        }), 
        blip: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(9),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(10),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/blip2.png',
                    width: getGridPosition(6),
                    height: getGridPosition(13),
                },
            },
            door: {
                offsetX: getGridPosition(2),
                offsetY: getGridPosition(10.5),
                src: '../images/doors/door-building.png',
                width: getGridPosition(2),
                height: getGridPosition(2),
            }
        }),
        blipInfo: new GameObject({
            x: getGridPosition(7),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/information.png',
                    width: 16,
                    height: 32,
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'interactionBox',
                            title: 'Blip (Summer internship - 3 months)',
                            textLines:  [
                                `During my 3 months summer internship at Blip, I had the opportunity to work on a project to dynamically structure the front-end community documentation using JSDoc3`,
                                `This project allowed me to get some knowledge on Front End tools while working with Scrum for the first time`
                            ],
                        },
                    ]
                }
            ],
        }),
        coffeeShop: new GameObject({
            x: getGridPosition(19),
            y: getGridPosition(1),
            hasShadow: false,
            width: getGridPosition(5),
            height: getGridPosition(8),
            sprite: {
                object: {
                    src: '../images/objects/coffee.png',
                    width: getGridPosition(5),
                    height: getGridPosition(9),
                },
            },
        }),
        iceCreamShop: new GameObject({
            x: getGridPosition(1),
            y: getGridPosition(3),
            hasShadow: false,
            width: getGridPosition(7),
            height: getGridPosition(3),
            collisionOffset: {
                width: 0,
                height: getGridPosition(1),
            },
            sprite: {
                object: {
                    src: '../images/objects/ice-cream.png',
                    width: getGridPosition(7),
                    height: getGridPosition(5),
                },
            },
        }),
        pizzaShop: new GameObject({
            x: getGridPosition(10),
            y: getGridPosition(2),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(5),
            sprite: {
                object: {
                    src: '../images/objects/pizza.png',
                    width: getGridPosition(6),
                    height: getGridPosition(6),
                },
            },
        }),
        // SOFT SKILLS BUILDING
        softSkills: new GameObject({
            x: getGridPosition(27),
            y: getGridPosition(0),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(9),
            sprite: {
                object: {
                    src: '../images/objects/soft-skills.png',
                    width: 96,
                    height: 160,
                },
            },
            door: {
                offsetX: getGridPosition(0),
                offsetY: getGridPosition(8),
                src: '../images/doors/door-softskills.png',
                width: getGridPosition(3),
                height: getGridPosition(2),
            }
        }),
        // SOCIAL BILLBOARDS
        socialBillboard: new GameObject({
            x: getGridPosition(35),
            y: getGridPosition(3),
            hasShadow: false,
            width: getGridPosition(5),
            height: getGridPosition(5),
            sprite: {
                object: {
                    src: '../images/objects/billboard-social.png',
                    width: getGridPosition(5),
                    height: getGridPosition(6),
                    animations: billboard
                },
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'message', 
                            text: `https://github.com/vascofbribeiro`,
                            isLink: true
                        },
                        {
                            type: 'message', 
                            text: `https://www.linkedin.com/in/vascof-ribeiro/`,
                            isLink: true
                        }
                    ],
                }
            ],
        }),
        awardsBillboard: new GameObject({
            x: getGridPosition(56),
            y: getGridPosition(12),
            hasShadow: false,
            width: getGridPosition(5),
            height: getGridPosition(4),
            sprite: {
                object: {
                    src: '../images/objects/billboard-awards.png',
                    width: getGridPosition(5),
                    height: getGridPosition(6),
                    animations: billboard
                },
            },
            collisionOffset: {
                width: 0,
                height: getGridPosition(1)
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'message',
                            text:'Winner in the category "Fun" at Make Or Break 2017 (Porto Summer Of Code) - 3 days hackathon'
                        },
                        {
                            type: 'message',
                            text:'Our team created an application to rate public restrooms using sensors to detect if toilet paper is available'
                        },
                        {
                            type: 'message',
                            text:'https://medium.com/makeorbreak-io/make-or-break-more-than-a-hackathon-45d43c0042ba',
                            isLink: true
                        },
                    ]
                }
            ],
        }),
        signAndroid: new GameObject({
            x: getGridPosition(63),
            y: getGridPosition(15),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/sign-android.png',
                    width: getGridPosition(1),
                    height: getGridPosition(3)
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'interactionBox',
                            title: 'Android Development Course',
                            textLines:  [
                                `In 2014 I applied to a 2 week Android course in Yekaterinburg with BEST - Board of European Students`,
                                `I ended up being chosen to participate and the aim of the course was to give students good knowledge of Android architecture and programming`
                            ]
                        },
                    ]
                }
            ],
        }),
        campervan: new GameObject({
            x: getGridPosition(58),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(6),
            height: getGridPosition(1),
            collisionOffset: {
                height: getGridPosition(1),
                width: 0
            },
            sprite: {
                object: {
                    src: '../images/objects/campervan.png',
                    width: getGridPosition(6),
                    height: getGridPosition(4),
                },
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'message',
                            text:'I love to travel and discover new places 🌍'
                        },
                    ]
                }
            ],
        }),
        thinkGlobe: new GameObject({
            x: getGridPosition(61),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/interfaces/globe.png',
                    width: getGridPosition(1),
                    height: getGridPosition(2),
                    animations: globe
                },
            }
        }),
        volunteer: new GameObject({
            x: getGridPosition(57),
            y: getGridPosition(4),
            hasShadow: false,
            width: getGridPosition(4),
            height: getGridPosition(3),
            collisionOffset: {
                height: getGridPosition(1),
                width: 0
            },
            sprite: {
                object: {
                    src: '../images/objects/volunteer.png',
                    width: getGridPosition(4),
                    height: getGridPosition(5),
                },
            },
            interactionIcon: {
                far:  '../images/objects/interaction.png',
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'interactionBox',
                            title: 'ESN Porto (2015-2018)',
                            textLines:  [
                                `As a volunteer for ESN - Erasmus Student Network I was responsible for integrating ERASMUS students into the city of Porto.`,
                                `This was accomplished by organizing trips and activities in partnership with several companies and instituions`
                            ],
                        },
                        {
                            type: 'interactionBox',
                            title: 'ESN Porto (2015-2018)',
                            textLines:  [
                                `My work helped to create a welcoming and inclusive environment for international students, and allowed them to fully experience and enjoy their time in Porto`,
                            ],
                        },
                    ],
                }
            ],
        }),

        //TREES
        fountain: new GameObject({
            x: getGridPosition(50),
            y: getGridPosition(20.5),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/fountain.png',
                    width: getGridPosition(2),
                    height: getGridPosition(3),
                    animations: fountain
                },
            },
        }),
        bench: new GameObject({
            x: getGridPosition(50),
            y: getGridPosition(19),
            hasShadow: false,
            width: getGridPosition(2),
            height: getGridPosition(1),
            sprite: {
                object: {
                    src: '../images/objects/bench-down.png',
                    width: getGridPosition(2),
                    height: getGridPosition(2),
                },
            },
            type: 'bench',
            interactions: interactions.bench
        }),
        benchLeft: new GameObject({
            x: getGridPosition(53),
            y: getGridPosition(20),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/bench-left.png',
                    width: getGridPosition(1),
                    height: getGridPosition(3),
                },
            },
            type: 'bench',
            interactions: interactions.bench
        }),
        benchRight: new GameObject({
            x: getGridPosition(48),
            y: getGridPosition(20),
            hasShadow: false,
            width: getGridPosition(1),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/bench-right.png',
                    width: getGridPosition(1),
                    height: getGridPosition(3),
                },
            },
            type: 'bench',
            interactions: interactions.bench
        }),

        beer: new GameObject({
            x: getGridPosition(67),
            y: getGridPosition(14),
            hasShadow: false,
            width: getGridPosition(3),
            height: getGridPosition(2),
            sprite: {
                object: {
                    src: '../images/objects/beer.png',
                    width: getGridPosition(3),
                    height: getGridPosition(4),
                },
            },
            interactions: [
                {
                    events: [
                        {
                            type: 'message',
                            text: `You grab a cold beer and take a refreshing sip!  Just remember... too many might make the path a bit wobbly`,
                        },
                        {
                            type: 'beer',
                            who: 'miniMe'
                        },
                    ],
                }
            ],
            collisionOffset: {
                width: 0,
                height: getGridPosition(1)
            }
        }),
    },
    walls: {
        // [getGridCoord(42,25)]: true,
        // [getGridCoord(70,17)]: true,
        // [getGridCoord(70,18)]: true
    },
    limits: {
        xMin: getGridPosition(11),
        yMin: getGridPosition(6.5),
        xMax: getGridPosition(59),
        yMax: getGridPosition(20)
    },
    actionSpaces: {
        // Interactions for coffe
        [getGridCoord(21,9)]: interactions.coffee,
        // Interactions for pizza
        [getGridCoord(11,7)]: interactions.pizza,
        // Interactions for iceCream
        [getGridCoord(3,7)]: interactions.iceCream,
        [getGridCoord(55,20)]: [
            {
                triggerOnce: true,
                events: [
                    {type: 'message', text: `A wild bug appeared!!`},
                    {type: 'show', who: 'bug', direction: 'down' },
                    {type: 'walk', who: 'bug', direction: 'up'},
                    {type: 'walk', who: 'bug', direction: 'up'},
                    {type: 'walk', who: 'bug', direction: 'up'},
                    {type: 'walk', who: 'bug', direction: 'up'},
                    {type: 'walk', who: 'bug', direction: 'up'},
                    {type: 'walk', who: 'bug', direction: 'up'},
                    {type: 'hide', who: 'bug' },
                    {type: 'message', text: `That's one less for the QA Team!`},
                ]
            }
        ],
        [getGridCoord(66,6)]: [
            {
                events: [
                    { type: 'changeMap', map: 'house'},
                ]
            }
        ],
        [getGridCoord(69,17)]: [
            {
                events: [
                    { type: 'changeMap', map: 'basket'},
                ]
            }
        ],
        [getGridCoord(69,18)]: [
            {
                events: [
                    { type: 'changeMap', map: 'basket'},
                ]
            }
        ],
        [getGridCoord(41,0)]: [
            {
                events: [
                    { type: 'changeMap', map: 'beach'},
                ]
            }
        ],
        [getGridCoord(42,0)]: [
            {
                events: [
                    { type: 'changeMap', map: 'beach'},
                ]
            }
        ],
        [getGridCoord(28,8)]: [
            {
                events: [
                    { type: 'changeMap', map: 'softSkills'},
                ]
            }
        ],
        [getGridCoord(28,19)]: [
            {
                events: [
                    {type: 'message', text: `I'm not allowed to enter the building since I don't work here anymore`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(27,19)]: [
            {
                events: [
                    {type: 'message', text: `I'm not allowed to enter the building since I don't work here anymore`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(19,19)]: [
            {
                events: [
                    {type: 'message', text: `I'm not allowed to enter the building since I don't work here anymore`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(20,19)]: [
            {
                events: [
                    {type: 'message', text: `I'm not allowed to enter the building since I don't work here anymore`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(12,18)]: [
            {
                events: [
                    {type: 'message', text: `I'm not allowed to enter the building since I don't work here anymore`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(11,18)]: [
            {
                events: [
                    {type: 'message', text: `I'm not allowed to enter the building since I don't work here anymore`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(3,19)]: [
            {
                events: [
                    {type: 'message', text: `I'm not allowed to enter the building since I don't work here anymore`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        [getGridCoord(4,19)]: [
            {
                events: [
                    {type: 'message', text: `I'm not allowed to enter the building since I don't work here anymore`},
                    {type: 'walk', who: 'miniMe', direction: 'down' },
                ]
            }
        ],
        // [getGridCoord(35,19)]: [
        //     {
        //         events: [
        //             { type: 'changeMap', map: 'farfetch'},
        //         ]
        //     }
        // ],
        // [getGridCoord(36,19)]: [
        //     {
        //         events: [
        //             { type: 'changeMap', map: 'farfetch'},
        //         ]
        //     }
        // ],
        [getGridCoord(45,16)]: [
            {
                events: [
                    { type: 'changeMap', map: 'techskills'},
                ]
            }
        ],
    },
    initialInteractions: [
        ...addActions({type: 'walk', who: 'car', direction: 'right'}, 17),
        {type: 'idle', who: 'car', direction: 'down', time: 200},
        {type: 'changeCameraView', who: 'miniMe'},
        {type: 'show', who: 'miniMe', direction: 'down' },
        {type: 'walk', who: 'miniMe', direction: 'up'},
        {type: 'walk', who: 'miniMe', direction: 'up'},
        {type: 'walk', who: 'miniMe', direction: 'up'},
        {type: 'walk', who: 'miniMe', direction: 'up'},
        {type: 'walk', who: 'miniMe', direction: 'up'},
        {type: 'idle', who: 'miniMe', direction: 'down', time: 200},
        {type: 'message', text: 'Hello! 👋 Welcome to my Portfolio', showNote: true},
        {type: 'message', text: `My name is Vasco and I'm a Front-end Developer`},
        {type: 'message', text: (isMobile: boolean) => {
                return `Feel free to explore the rooms! Use the ${isMobile ? 'joystick' : 'arrows'} to walk around and press ${isMobile ? 'A' : 'spacebar'} to interact with objects.`
            }
        }
    ]
};

createLinearWall({coord: 'x', x: 0, y: 3, n: 41, map: outside});
createLinearWall({coord: 'x', x: 43, y: 3, n: 30, map: outside});
createLinearWall({coord: 'y', x: 62, y: 3, n: 6, map: outside});
createLinearWall({coord: 'y', x: 40, y: -1, n: 4, map: outside});
createLinearWall({coord: 'x', x: 62, y: 8, n: 3, map: outside});
createLinearWall({coord: 'x', x: 67, y: 8, n: 3, map: outside});
createLinearWall({coord: 'y', x: 0, y: 0, n: 28, map: outside});
createLinearWall({coord: 'y', x: 69, y: 0, n: 28, map: outside});
createLinearWall({coord: 'x', x: 0, y: 25, n: 70, map: outside});
createLinearWall({coord: 'x', x: 40, y: -1, n: 4, map: outside});
createLinearWall({coord: 'y', x: 70, y: 17, n: 2, map: outside});

