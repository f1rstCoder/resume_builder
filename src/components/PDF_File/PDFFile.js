import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf';
import Logo from '../assets/logo/resume_pic.jpeg'
import mail from '../assets/logo/mail.png';
import location from '../assets/logo/location.png';
import phone from '../assets/logo/phone.png';
import github from '../assets/logo/github.png';
import linkedin from '../assets/logo/linkedin.png';
import calendar from '../assets/logo/calendar.png';

Font.register({
    family: "Poppins",
    format: "truetype",
    src: PoppinsRegular,
});
const styles = StyleSheet.create({
    body: {
        paddingTop: 15,
        paddingBottom: 5,
        paddingHorizontal: 15,
    },
    content: {
        flexDirection: 'row',
    },
    block1: {
        flexDirection: "column",
        width: '65%',
        paddingRight: 5,
    },
    block2: {
        flexDirection: "column",
        width: '35%',
        paddingRight: 5,
        backgroundColor: 'rgb(12,29,55)',
        color: 'rgb(255,255,255)',
    },
    headingBlock1: {
        flexDirection: "column",
        width: '55%',
        paddingRight: 5,
    },
    headingBlock2: {
        flexDirection: "column",
        width: '45%',
        paddingRight: 5,
        backgroundColor: 'rgb(12,29,55)',
        color: 'rgb(255,255,255)',
    },
    element: {
        margin: 4,
    },

    title: {
        fontSize: 22,
        fontFamily: 'Helvetica-Bold',
        textAlign: 'justify',
        color: 'rgb(51, 143, 222)',
        margin: 2,
        paddingLeft: 5,
    },
    subtitle: {
        paddingLeft: 5,
        fontSize: 14,
        fontFamily: 'Helvetica-Bold',
        fontWeight: 'bold',
        marginTop: 2,
        marginBottom: 1,
        color: 'rgb(51, 143, 222)',
    },
    subsubtitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 12,
        margin: 2,
        paddingLeft: 10,
    },
    text: {
        margin: 1,
        fontSize: 10,
        textAlign: 'justify',
        fontFamily: 'Poppins',
        paddingLeft: 10,
    },
    skilltitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 10,
        margin: 2,
        paddingLeft: 10,
    },
    skillText: {
        margin: 2,
        fontSize: 12,
        textAlign: 'justify',
        fontFamily: 'Poppins',
        paddingLeft: 10,
    },
    skillElement: {
        margin: 2,
    },

    SVGText: {
        margin: 2,
        fontSize: 10,
        textAlign: 'left',
        fontFamily: 'Poppins',
        paddingLeft: 5,
    },
    SVGimage: {
        height: 10,
        width: 15,
        marginRight: 5,
        paddingLeft: 5,
        alignSelf: 'center',

    },
    image: {
        height: 85,
        width: 85,
        margin: 5,
        paddingLeft: 5,
        alignSelf: 'center',

    },

    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});


const Br = () => "\n";

const PDFFile = () => {
    return (
        <Document>
            <Page size="A4" style={styles.body}>

                <View style={styles.content}>
                    <View style={styles.block1} >
                        <View style={styles.element}>
                            <Text style={styles.subtitle}>
                                PROFILE
                            </Text>
                            <Text style={styles.text}>
                                I am a final year undergraduate having keen interest in the field of Web Development with special emphasis on Frontend Development.
                            </Text>
                        </View>
                        <View style={styles.element}>
                            <Text style={styles.subtitle}>
                                PERSONAL EXPERIENCE
                            </Text>
                            <Text style={styles.subsubtitle}>
                                CS Soft Solutions
                            </Text>
                            <Text style={styles.text}>
                                [Mohali, Punjab | Dec 2021- Jan 2022] <Br />
                                •  Received training in React.js.<Br />
                                •  <Text>Learn to code and design the landing page and menu page for an online food ordering website using React.js.<Br /></Text>
                                •  Designed CSS for the above mentioned as well as other minor projects<Br />
                            </Text>
                        </View>
                        <View style={styles.element}>
                            <Text style={styles.subtitle}>
                                PROJECT WORKS
                            </Text>
                            <Text style={styles.subsubtitle}>
                                Khabar
                            </Text>
                            <Text style={styles.text}>
                                •  Designed a responsive, modern news website with different categories using React.js and Bootstrap 5 with news fed from NewsAPI.<Br />
                                •  Dynamically rendered latest and current list of news using features like infinite scroll, loading spinner and loading bar<Br />
                                •  Each news card includes thumbnail photo, title, brief description, author, date, time and news link of each news item component<Br />
                                •  Various categories of news like Business, Sports, Technology, Science, etc. available with responsive display<Br />
                                •  Implemented React,js concepts including React.js Hooks, fetching, async-await, react-router-dom on a functional component architecture.<Br />
                                •  Github Link: https://github.com/f1rstCoder/khabar/<Br />
                            </Text>
                        </View>
                        <View style={styles.element}>
                            <Text style={styles.subtitle}>
                                EDUCATION
                            </Text>
                            <Text style={styles.subsubtitle}>
                                B.E.
                            </Text>
                            <Text style={styles.subsubtitle}>
                                Thapar Institute of Engineering and Technology, Patiala
                            </Text>
                            <Text style={styles.text}>
                                [08/09/2019 - Present 2023]<Br />
                                [CGPA - 8.27]
                            </Text>
                            <Text style={styles.subsubtitle}>
                                XIIth Class
                            </Text>
                            <Text style={styles.subsubtitle}>
                                St. Anne's Convent School, Chandigarh
                            </Text>
                            <Text style={styles.text}>
                                [05/2017 - 03/2019]<Br />
                                [Percentage - 85.80%]
                            </Text>
                            <Text style={styles.subsubtitle}>
                                Xth Class
                            </Text>
                            <Text style={styles.subsubtitle}>
                                St. Kabir Public School, Chandigarh
                            </Text>
                            <Text style={styles.text}>
                                [04/2014 - 03/2017]<Br />
                                [CGPA - 10.00]
                            </Text>
                        </View>
                        <View style={styles.element}>
                            <Text style={styles.subtitle}>
                                ACHIEVEMENTS / AWARDS
                            </Text>
                            <Text style={styles.text}>
                                •  Awarded Silver Medal in Electronic Keyboard playing by Victoria College of Music and Drama, London<Br />
                                •  Awarded Grade 5 Electronics Keyboard certificate by Trinity College, London<Br />
                                •  Winner of SPECMEN Award at RISCMUN'16 and Verbal Mention Award at PUMUN'17<Br />
                                •  Won Second Prize at Shakespeare Lives 2016 Public Speaking Competition organized by the British Council<Br />
                            </Text>
                        </View>
                    </View>
                    <View style={styles.block2} >
                        {/* <View style={styles.element}>
                            <View style={styles.content}>
                                <View style={styles.headingBlock2} >
                                    <Image style={styles.image} src={Logo} />
                                </View>
                                <View style={styles.headingBlock1} >
                                    <Text style={styles.title}>RITWIK PATHAK</Text>
                                </View>
                            </View>
                        </View> */}
                        <View style={styles.element} >
                            <Image style={styles.image} src={Logo} />
                        </View>
                        <View style={styles.element} >
                            <Text style={styles.title}>RITWIK PATHAK</Text>
                        </View>
                        <View style={styles.element}>
                            <View style={styles.content}>
                                <Image style={styles.SVGimage} src={mail} />
                                <Text style={styles.SVGText}>ritwikcoding@gmail.com</Text>
                            </View>
                            <View style={styles.content}>
                                <Image style={styles.SVGimage} src={phone} />
                                <Text style={styles.SVGText}>+91 - 9463793058</Text>
                            </View>
                            <View style={styles.content}>
                                <Image style={styles.SVGimage} src={location} />
                                <Text style={styles.SVGText}>Chandigarh, India</Text>
                            </View>
                            <View style={styles.content}>
                                <Image style={styles.SVGimage} src={linkedin} />
                                <Text style={styles.SVGText}>www.linkedin.com/in/ritwikpathak0707007/</Text>
                            </View>
                            <View style={styles.content}>
                                <Image style={styles.SVGimage} src={github} />
                                <Text style={styles.SVGText}>https://github.com/f1rstCoder</Text>
                            </View>
                            <View style={styles.content}>
                                <Image style={styles.SVGimage} src={calendar} />
                                <Text style={styles.SVGText}>06-10-2022</Text>
                            </View>
                        </View>
                        <View style={styles.element}>
                            <Text style={styles.subtitle}>
                                SKILLS
                            </Text>

                            <View style={styles.skillElement}><Text style={styles.subsubtitle}>Skilled In:<Br /></Text><Text style={styles.text}> C/C++ | HTML5 | CSS | JavaScript | React.js | Bootstrap 5<Br /></Text></View>

                            <View style={styles.skillElement}><Text style={styles.subsubtitle}>Familiar Technologies:<Br /></Text><Text style={styles.text}> MongoDB<Br /></Text></View>

                            <View style={styles.skillElement}><Text style={styles.subsubtitle}>Software Used:<Br /></Text> <Text style={styles.text}>GitHub | VS Code | Visual Studio | Postman | MongoDB Compass<Br /></Text></View>

                            <View style={styles.skillElement}><Text style={styles.subsubtitle}>Knowledge In:<Br /></Text><Text style={styles.text}> Data Structures and Algorithm (DSA) | Database Management System (DBMS) | Operating Systems (OS) | Object Oriented Programming(OOPs) <Br /></Text></View>

                        </View>
                        <View style={styles.element}>
                            <Text style={styles.subtitle}>
                                CERTIFICATES
                            </Text>
                            <Text style={styles.subsubtitle}>
                                Beginning C++ Programming - From Beginner to Beyond
                            </Text>
                            <Text style={styles.text}>
                                Created By: Tim Buchalka's Learn Programming Academy,<Br />
                                Instructor: Dr Frank Mitropolus
                            </Text>
                            <Text style={styles.subsubtitle}>
                                Simplified Approach to DBMS
                            </Text>
                            <Text style={styles.text}>
                                Creater and Instructor : Prof. Parteek Bhatia
                            </Text>
                        </View>
                        <View style={styles.element}>
                            <Text style={styles.subtitle}>
                                LANGUAGES
                            </Text>
                            <Text style={styles.text}>
                                1. English [Full Proficiency]<Br />
                                2. Hindi [Full Proficiency]<Br />
                                3. Bengali [Native Proficiency]<Br />
                                4. Punjabi [Native Proficiency]
                            </Text>
                        </View>
                    </View>
                    <Text
                        style={styles.pageNumber}
                        render={({ pageNumber, totalPages }) => (
                            pageNumber > 1 ? `${pageNumber} / ${totalPages}` : ``
                        )} fixed
                    />
                </View>
            </Page>
        </Document>
    )
}

export default PDFFile;
