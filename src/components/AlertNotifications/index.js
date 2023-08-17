// Write your code here
import Notification from '../Notification'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning} from 'react-icons/md'
import {MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const AlertNotifications = () => (
    <div className="bg-container">
        <div className="responsive-container">
            <h1 className="heading"> Alert Notifications </h1>
            <Notification> 
                <AiFillCheckCircle className="success-icon"/>
                <h1 className="success"> Success </h1>
                <p className="description"> You can access all the files in the folder </p>
                <GrFormClose className="close-icon" />
            </Notification>

            <Notification> 
                <RiErrorWarningFill className="error-icon"/>
                <h1 className="error"> Error </h1>
                <p className="description"> Sorry, you are not authorized to have access to delete the file </p>
                <GrFormClose className="close-icon" />
            </Notification>

            <Notification> 
                <MdWarning className="warning-icon"/>
                <h1 className="warning"> Warning </h1>
                <p className="description"> Viewers of this file can see comments and suggestions </p>
                <GrFormClose className="close-icon" />
            </Notification>

            <Notification> 
                <MdInfo className="info-icon"/>
                <h1 className="info"> Info </h1>
                <p className="description"> Anyone on the internet can view these files </p>
                <GrFormClose className="close-icon" />
            </Notification>

        </div>
    </div>
)

export default AlertNotifications