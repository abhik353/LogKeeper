import React,{useState, useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect} from 'react-redux'
import PropTypes from 'prop-types'
import { updateLogs } from '../../actions/logActions'
import TechSelectOption from '../techs/TechSelectOption'



const EditLogModal = ({current, updateLogs}) => {
    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

    useEffect(()=>{
        if(current){
            setMessage(current.message)
            setAttention(current.attention)
            setTech(current.tech)
        }
    },[current])

    const onSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({html: 'fields cannot be blank'})
        }
        else{
        const updateLog = {
            id: current.id,
            message: current.message,
            attention: current.attention,
            tech: current.tech,
            date : new Date()
        }
        updateLogs(updateLog)
        M.toast({html:`log updated by ${tech}`})
        setMessage('')
        setTech('')
        setAttention(false)
        }
    }

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter system log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='message' value={message} onChange={e => setMessage(e.target.value)}/>
                        
                    </div>
                </div>
                <div className="row">
                    <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                        <TechSelectOption/>
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

EditLogModal.propTypes = {
    current : PropTypes.object,
    updateLogs: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
        current: state.log.current
 } )

export default connect(mapStateToProps,{updateLogs})(EditLogModal)
