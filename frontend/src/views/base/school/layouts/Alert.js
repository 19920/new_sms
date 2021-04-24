import React, { useState, Fragment } from 'react'
import {useSelector} from 'react-redux'
const Alert = () => {
 const alerts = useSelector(state => state.alertReducer)
    return (
        <Fragment>
        <div className='myAlert'>
            <center>
                {alerts !== null && alerts.length > 0 && alerts.map(alert => (
                    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
                        {alert.msg}
                    </div>
                ))}
            </center>
        </div>
    </Fragment>
    )
}

export default Alert
