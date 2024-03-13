const people = [
  {
    name: 'Reese Roccaforte',
    role: 'Autism incarnate',
    imageUrl:
      '../src/assets/reeseprofile.jpg',
    bio: "Meet Reese Roccaforte, the coder often referred to as 'Autism Incarnate.' With a mind that functions like an intricate algorithm, Reese's unique perspective on coding brings a blend of precision and creativity. Their ability to see patterns and connections that elude others in the coding world makes Reese a true maestro, turning lines of code into a symphony of digital innovation.",
  },
  {
      name: 'Joseph Vazquez',
      role: 'Senior Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    },
    {
      name: 'Jeremy Jarvis',
      role: 'International man of mystery',
      imageUrl:
        '../src/assets/jeremyprofile.png',
      bio: "Jeremy Jarvis, the International Man of Mystery in the coding world, navigates the digital realm with unparalleled skill. Born in the shadows of encryption, this enigmatic coder's mastery of programming languages and knack for hacking has made them a legendary figure, weaving through the intricate web of cyber espionage and leaving behind a trail of intrigue.",
    },
    {
      name: 'Angel Cardenas',
      role: 'Edge lord',
      imageUrl:
        '../src/assets/angelprofile.jpg',
      bio: "Introducing Angel Cardenas, the Edge Lord of the coding realm. With a keyboard as their weapon and a penchant for the unconventional, Angel fearlessly dances on the cutting edge of technology, crafting code that defies norms and challenges the status quo. Unleashing a digital rebellion, Angel stands as a provocateur in the world of programming, pushing boundaries and leaving a trail of innovation that echoes with a rebellious spirit.",
    },
    
  // More people...
]

export default function TheForgotenOnes() {
  return (
    <div className="bg-gradient-to-b from-green-600 from-80% to bg-yellow-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl p-4 bg-white rounded shadow-md sm:text-center">
  <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Meet The Forgotten Ones 😎</h2>
  <p className="mt-6 text-lg leading-8 text-black">
    We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
    best results for our clients.
  </p>
</div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row bg-white rounded-md cursor-pointer hover:gap-8">
              <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <div className="flex-auto">
                <h3 className="p-3 text-lg font-semibold leading-8 tracking-tight text-gray-900 hover:text-2xl">{person.name}</h3>
                <p className="p-3 text-base leading-7 text-gray-600 hover:text-xl">{person.role}</p>
                <p className="p-3 mt-6 text-base leading-7 text-gray-600 hover:text-xl">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
