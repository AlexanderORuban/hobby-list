import Hobby from "./Hobby.jsx"

function Hobbies({hobbies}) {
    return (
        <div>
            {hobbies.map((hobby, index) => <Hobby key={`${index}${hobby.name}`} name={hobby.name} ranking={hobby.ranking}/>)}
        </div>
    )
}

export default Hobbies