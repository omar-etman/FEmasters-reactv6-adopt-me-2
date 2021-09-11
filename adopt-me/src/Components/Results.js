import Pet from "./Pet"

const Results =({pets})=> {

    return (
        <div className="search">
            {
                !pets.length ? (
                    <h2>No Pets Found</h2>
                ) : (pets.map((pet) => (
                          <Pet 
                            name={pet.name} 
                            breed={pet.breed} 
                            animal={pet.animal} 
                            key={pet.id}
                            location={`${pet.city}, ${pet.state}`}
                            images={pet.images}
                            id={pet.id}
                          />
                        )
                    )
                      
                )
            }
        </div>
    )
}

export default Results
