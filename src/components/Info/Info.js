import React from 'react'
import './Info.css';

function Info() {
  return (
    <div className='infomain'>
        <div className='upinfo'>
            <div className='ulinfo'>
            <a className="vitimg" href="/#t"><img src={require("./vitimg.jpeg")} id="tl" alt="Logo" /></a>
            </div>
            <div className='urinfo'>
                <p className='head'>VIT</p>
                <p>
                Vellore Institute of Technology (VIT) is a private deemeduniversity located in the city of Vellore, 
                Tamil Nadu, founded in1984, as Vellore Engineering College, 
                by Dr. G. Viswanathan,knows no limits and possibilities unfold at every turnABOUTVIT Group of Institutions offer 66 Undergraduate, 58 Postgraduate, 15Integrated Programmes, 2 Research programmes and 2 M. Techindustrial Programmes. In addition to full-time Ph.D Degrees inEngineering and Management Disciplines, Ph.D. in Science andLanguages and Integrated Ph.D. programmes in engineeringdisciplines. Research Centers, integral of respective schoolsencourageinter-departmental collaborative participation of students in excitingresearch projects. A student admitted should register in one of theschools depending on the degree programme selected to pursue. Theglobal standards set at VIT in the field of teaching and research spurus on in our relentless pursuit of excellence where creativity
                </p>
            </div>
        </div>
        <div className='downinfo'>
            <div className='dlinfo'>
                <p className='head'>SELECT</p>
                <p>
                The School of Electrical Engineering (SELECT) boasts adistinguished faculty of 98 members, holding UG, PG, andDoctoral degrees from renowned universities. Offering B.Tech.programs in Electrical and Electronics Engineering, Electronics andinstrumentation Engineering, as well as M.Tech. specializations inPower Electronics and Drives, and Control and Automation, alongwith Ph.D. and Integrated Ph.D. in Engineering, SELECT attractsbright minds both nationally and internationally.It's ABET-accredited B.Tech. programs and IET-accredited UG &PG courses boast a nearly 100% campus placement rate in corecompanies. SELECT features cutting-edge labs like DanfossAdvanced Drives Lab, Schneider Electric Smart Energy MonitoringLab, Fluke Testing and Calibration Lab, Q-Max Automated TestEngineering Lab, 
                and NxP Semiconductors' Centre of Excellence,fostering student research guided by experts.
                </p>
            </div>
            <div className='drinfo'>
            <a className="selectimg" href="/#t"><img src={require("./vitimg.jpeg")} id="tl" alt="Logo" /></a>
            </div>
        </div>
    </div>

  );
}

export default Info;
