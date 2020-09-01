import React,{useState} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'
import { addLogs } from '../../actions/logActions'

const AddLogModal = ({addLogs}) => {
    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

    const onSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({html: 'fields cannot be blank'})
        }
        else{
        const newLog = {
            message,
            attention,
            tech,
            date: new Date()
        }
        addLogs(newLog)
        M.toast({html: `Log successfully added by ${tech}`})
        setMessage('')
        setTech('')
        setAttention(false)
        }
    }

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter system log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='message' value={message} onChange={e => setMessage(e.target.value)}/>
                        <label htmlFor="message" className="active">
                            Log message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                        <option value="John doe">John doe</option>
                        <option value="John doe1">John doe1</option>
                        <option value="John doe2">John doe2</option>
                    </select>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)}/>
                                <span>needs attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect cyan waves-light btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

AddLogModal.propTypes = {
    addLogs: PropTypes.func.isRequired
}

export default connect(null,{addLogs})(AddLogModal)
