  import React from 'react'
import './PageTemplate.css'

function PageTemplate(props) {

 /* const [localCanDrag, setLocalCanDrag] = props.localCanDragArr */

  /* const toggleSwitch = () => setLocalCanDrag(!localCanDrag) */
  /* const toggleSelect = () => setIsSelected(!isSelected) */

  return (
    <div className='page-inner-wrapper'>
        <div className='page-nav'>
            Case 727
        </div>
        <div className='page-body'>
            <div className='clue-body'>
                <div className='clue-title'>Intro</div>
                <div className='clue-text'>#727: Operation Charlie Welcome back, Sherlock! A middle-aged man in his forties, named Dan Cooper, boarded a Boeing 727-200 which has a speed of Mach 0.4. A few minutes after the take-off, Cooper handed a note to the flight attendant, claiming he had explosives in his bag. She was asked to co-operate with his instructions. As directed, the flight crew contacted the local and federal authorities. Cooper conveyed a set of demands to be fulfilled. The FBI, after having photofilmed the cash and its serial numbers, fulfilled all his demands; after which he released all passengers except the flight crew. He directed the crew to take off again, with the landing gear deployed, along with some other specifications. He then asked the crew to sit in the cockpit awaiting further instructions. That was the last communication with Dan Cooper, after which he jumped off into the dark sky. Here begins the manhunt, Sherlock! Light up your cigars, call in your Watsons, and begin the chase! This case is now yours to crack!
</div>
            </div>
        </div> 
        <div className='page-footer btn-container'>
            
        </div>
    </div>
  )
}

export default PageTemplate