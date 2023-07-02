import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import PanelContainer from '../components/PanelContainer'
import CustomInput from '../components/CustomInput'
import PanelHeader from '../components/PanelHeader'
import Row from '../components/Row'
import axios from 'axios'

const buttons1 = [
    {
      icon : "fa-solid fa-xmark",
      bgColor : "#FFFFFF",
      txtColor : "#667085",
      value : "cancel",
      type : 'link',
      link : '/products',
    },
    {
      icon : "fa-solid fa-floppy-disk",
      bgColor : "#5C59E8",
      txtColor : "",
      value : "Save",
    }
  ]

const Locations = () => {

  const [location, setLocation] = useState({
                                              storageLocation : "",
                                              storageZone : "",
                                              storageArea : ""  
                                              })


  const handleChange = (e)=> {
    const updateLocation = {...location}
    updateLocation[e.target.name] = e.target.value
    setLocation(updateLocation)
  }

  const handleSubmit = (e)=> {
      e.preventDefault();
      axios.post("http://localhost:5050/LoactionController", location)
      .then((result)=> {
        console.log(location)
        setLocation({
          storageLocation : "",
          storageZone : "",
          storageArea : ""  
          })
      })
      .catch((err)=> {
        console.log(err.message)
      })
  }
  return (
    <div className='add-new-location main-page'>
      <form className='add-location-form' onSubmit={(e)=> handleSubmit(e)}>
          <PageHeader title={"Locations"}  infoBtn={buttons1}/>
          <PanelContainer mgtop={24}>
          <PanelHeader title={"Add New Location"} />
          <Row cls={"inputs-flex-group"}>
              <div style={{minWidth : "300px"}}>
                <CustomInput 
                          id={"st-location"} 
                          name={"storageLocation"}
                          value={location.storageLocation}
                          labelTxt={"Storage Location"} 
                          type={"text"} 
                          element={"text-input"}
                          placeholder={"Type new Storage Location..."}
                          onChange={(e)=> {handleChange(e)}}
                          />
              </div>
              <div style={{minWidth : "300px"}}>
                <CustomInput 
                          id={"st-zone"} 
                          name={"storageZone"}
                          value={location.storageZone}
                          labelTxt={"Storage Zone"} 
                          type={"text"} 
                          placeholder={"Type new Storage Zone..."}
                          element={"text-input"}
                          onChange={(e)=> {handleChange(e)}}
                          />
              </div>
              <div style={{minWidth : "300px"}}>
                <CustomInput 
                          id={"st-Area"} 
                          name={"storageArea"}
                          value={location.storageArea}
                          labelTxt={"Storage Area"} 
                          type={"text"} 
                          element={"text-input"}
                            placeholder={"Type new Storage Area..."}
                            onChange={(e)=> {handleChange(e)}}
                          />
              </div>
          </Row>
          </PanelContainer>
      </form>
      
    </div>
  )
}

export default Locations
