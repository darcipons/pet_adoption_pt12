import React from "react";
import PetListCardUI from "./PetListCardUI";

export default class PetLookup extends React.Component {
  state = {}

  renderPets(pets) {
    return (
      <div className="row">
      {
        [ ...pets ].map( pet => (
          <div key={pet.id} className="col-md-4">
            <PetListCardUI pet={pet}/>
          </div>
        ))
      }
    </div>
    )
  }

  render() {
    const {pets} = this.props
    return (
      <div className="pet list container">
       {!!pets
          ? this.renderPets(pets)
          : "Loading..."
       }
      </div>
    );
  }
}
