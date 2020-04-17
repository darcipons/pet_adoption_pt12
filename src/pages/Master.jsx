import React, { Component } from 'react'
import PetLookup from '../components/PetLookup'
import PetListFilter from '../components/PetListFilter'
import axios from 'axios'

class Master extends Component {
  state = {
    pets: [],
    filtered: [],
    breeds: []
  }

  getPets = () => {
    axios.get(`/pet_finder/pets?token=${window.caches.pet_finder_token}&animal=dog&location=Miami,FL&limit=20`)
      .then(({ data }) => {
        if (!data) {
          return false
        }
        let breeds = data.forEach(dog => {
          if(dog && dog.breeds && dog.breeds.primary) {
            return dog.breeds.primary
          }
        })
        this.setState({ 
          pets: data,
          filtered: data,
          breeds: [...new Set(breeds)]})
      })
    }

    componentDidMount() {
      if (!window.caches.pet_finder_token) {  //means: if the token does not exist then get it and save
        axios.get('/pet_finder/auth')
        .then(response => {
          window.caches.pet_finder_token = response.data
          this.getPets()
        })
      }
      else {
        this.getPets()
      }
    }

    filterPets = filters => {
      console.log("filtering")

      let tempPets = [...this.state.pets]
      if (filters.age) {
        tempPets = tempPets.filter(pet => pet.age === filters.age)
      }
      if (filters.breed) {
        tempPets = tempPets.filter(pet => pet.breeds.primary === filters.breed)
      }
      if (filters.gender) {
        tempPets = tempPets.filter(pet => pet.gender === filters.gender)
      }
      if (filters.size) {
        tempPets = tempPets.filter(pet => pet.size === filters.size)
      }

      this.setState({ filtered: tempPets })
    }

  render() {
      return (
        <div>
          <PetListFilter
            breeds={this.state.breeds}
            filterPets={this.filterPets}/>
          <PetLookup pets={this.state.filtered}/>
        </div>
      )
  }
}

export default Master;
