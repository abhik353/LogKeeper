import React,{useState} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'
import { addTechs } from '../../actions/techActions'

const AddTechModal = ({addTechs}) => {
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')

    const onSubmit = () => {
        if(firstName === '' || lastName === ''){
            M.toast({html: 'fields cannot be blank'})
        }
        else{
        addTechs({
            firstName,
            lastName
        })
        M.toast({html: `Tech ${firstName} successfully added`})
        setFirstname('')
        setLastname('')
        }
    }

    return (
        <div id="add-tech-modal" className="modal" >
            <div className="modal-content">
                <h4>New Techie</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='firstName' value={firstName} onChange={e => setFirstname(e.target.value)}/>
                        <label htmlFor="firstName" className="active">
                            Firstname
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='lastName' value={lastName} onChange={e => setLastname(e.target.value)}/>
                        <label htmlFor="lastName" className="active">
                            Firstname
                        </label>
                    </div>
                </div>
                
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect cyan waves-light btn">Enter</a>
            </div>
        </div>
    )
}

AddTechModal.propTypes = {
    addTechs: PropTypes.func.isRequired
}

export default connect(null,{addTechs})(AddTechModal)
