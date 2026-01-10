import './Experience.css';

const Experience = () => {
    return (
        <div className='experience-section' id='experience'>
            <h1 className='experience-header'>Experience</h1>
            <div className="experience-container">

                <div className='experience-item'> 
                    <h3 className='experience-title'>Fraser Health</h3>
                    <h5 className='experience-subtitle'>Data Management Co-op</h5>
                    <p className='experience-dates'>May 2024 – August 2024</p>
                    <ul className='experience-details'>
                        <li>Developed a front-end-to-database connection in Angular, .NET, and SQL Server for managing user permissions</li>
                        <li>Planned and implemented a design that handles error recovery for jobs running through SQLServer Agents</li>
                        <li>Ensured dimension tables between databases were consistent and ready for data modeling</li>
                    </ul>
                </div>

                <div className='experience-item'>
                    <h3 className='experience-title'>Fraser Health</h3>
                    <h5 className='experience-subtitle'>Data Management Co-op</h5>
                    <p className='experience-dates'>May 2023 – August 2023</p>
                    <ul className='experience-details'>
                        <li>Constructed SQL queries in order to group employee and job data across databases</li>
                        <li>Debugged and implemented stored procedures to produce changes in temporal table within a given time frame</li>
                        <li>Assisted in correcting corrupted table entries from system changes</li>
                    </ul>
                </div>

                <div className='experience-item'>
                    <h3 className='experience-title'>Fraser Health</h3>
                    <h5 className='experience-subtitle'>Data Management Co-op</h5>
                    <p className='experience-dates'>Sept 2021 – Dec 2021</p>
                    <ul className='experience-details'>
                        <li>Developed a script using PowerShell to check server health and performance on multiple servers</li>
                        <li>Designed and implemented an SQL Server Integration Service (SSIS) package that loads dimension and 
                            fact tables based on performance monitor data</li>
                        <li>Utilized tables generated from SSIS packages to make an OLAP cube in order to make meaningful 
                            calculations and analyze data </li>
                        <li>Generated automated HTML email reports on SQL job failures, improving operational visibility</li>
                    </ul>
                </div>
            </div>
            <div className="experience-spacer"></div>
        </div>

    )
}

export default Experience;