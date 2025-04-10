import Hobby from "./Hobby.jsx"

function Hobbies({hobbies}) {
    return (
        <div>
            {hobbies.map((hobby, index) => <Hobby key={`${index}${name}`} name={hobby.name} ranking={hobby.ranking}/>)}
        </div>
    )
}

export default Hobbies