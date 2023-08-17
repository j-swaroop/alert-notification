// Write your code here
import './index.css'

const Notification = props => {
    const {children} = props
  
    return(
        <div className="item-container">
            <div className="content-container">
                <div className="container">
                    {children[0]}
                    {children[1]}
                </div>
                {children[2]}
            </div>
            {children[3]}
        </div>
    )
}

export default Notification