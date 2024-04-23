import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>BSA</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.bsa.qa'}
                        >
                            <h4>www.bsa.qa</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend Engineer</h3>
                        {/* <b>
                            <p>Summer 2020 - Fall 2021</p>
                        </b> */}
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Targeted towards large businesses, that wants to show their work to the world through digital solutions
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                        I excel in creating responsive designs that provide optimal user experiences across various devices and screen sizes.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed and implemented multiple features to
                            increase app usability and user experience while
                            ensuring the quality, maintainability and
                            scalability of the front end as the user base grew
                            by over 50,000.
                        </p>
                    </li>
                    <li>
                        <p>
                            Coordinated major refactors targeted towards app
                            optimization and performance resulting in a smoother
                            user experience and accomplished by eliminating
                            redundant re-renders and API calls by over 50%.
                        </p>
                    </li>
                    <li>
                        <p>
                            Directed and executed an internal migration of 3
                            individual repositories to a single monorepo,
                            greatly reducing overhead for developing new
                            features, fixing bugs, and managing dependencies.
                        </p>
                    </li>
                    <li>
                        <p>
                            Rebuilt the website with React and shared mobile app
                            components allowing users to access a wide variety
                            of app interactions entirely on the web, which will result of
                            over 700,000 total site visits.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>WeCanSync</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://wecansync.com'}
                        >
                            <h4>www.wecansync.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend Engineer</h3>
                        {/* <b>
                            <p>Fall 2021 - Spring 2024</p>
                        </b> */}
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                During my tenure at the company as a front-end developer, one aspect I truly appreciated was the constant pressure to meet project deadlines. 
                This pressure pushed me to enhance my problem-solving abilities, often leading me to work overtime in order to deliver tasks on time.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                         Proficient in Front-end Technologies, expertise in creating modern and intuitive user interfaces.
                        </p>
                    </li>
                    <li>
                        <p>
                         Version Control Systems,  Proficient in using Git for version control, facilitating collaboration with teams and ensuring efficient code management
                        </p>
                    </li>
                    <li>
                        <p>
                        Performance Optimization: Skilled in optimizing front-end performance, employing strategies to minimize page load times, reduce HTTP requests, and optimize assets for improved performance
                        </p>
                    </li>
                    <li>
                        <p>
                         Adept at troubleshooting and debugging code efficiently using developer tools and other debugging techniques
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>FireLink Studios</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://kfxnyc.com/'}
                        >
                            {/* <h4>www.kfxnyc.com</h4> */}
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>My FreeLance Company-ish</h3>
                        {/* <b>
                            <p>Fall 2019, Summer 2021</p>
                        </b> */}
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                We began our journey in video game development, launching two titles in beta. 
                Despite our efforts, they didn't quite meet our expectations, prompting us to retire them. 
                However, this shift has led us to focus on meeting the diverse demands of our clients in website and mobile development.
                As we continue to hone our skills and expand our offerings, 
                we're eagerly looking forward to the day when we can self-fund and bring our own creative visions to life.
                </p>
                <br />
                {/* <h3 style={styles.indent}>Projects I've worked on:</h3>
                <ul>
                    <li style={styles.row}>
                        <p></p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.sho.com/ray-donovan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Ray Donovan: The Movie</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.sho.com/titles/3508117/ray-donovan-the-movie"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Hightown</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.starz.com/us/en/series/hightown/57463"
                                target="_blank"
                                rel="noreferrer"
                            >
                                STARZ
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Bull</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.cbs.com/shows/bull/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CBS
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• At Home with Amy Sedaris</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.trutv.com/shows/at-home-with-amy-sedaris"
                                target="_blank"
                                rel="noreferrer"
                            >
                                truTV
                            </a>{' '}
                            ]
                        </p>
                    </li>
                </ul> */}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
