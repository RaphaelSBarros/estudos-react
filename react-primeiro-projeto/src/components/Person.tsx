const getWeekday = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long'}).format(today);
}

export const Person = () => {

    const data = {
        name: 'Elon Musk',
        avatar: 'https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg',
        roles: ['CEO da Tesla', 'CEO da SpaceX']
    }

    //const name: string = 'Elon Musk';
    //const avatar: string = 'https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg';
    const today: Date = new Date();

    return(
        <>
            <h1 style={{ color: 'red', fontSize: '30px' }}>{data.name} - {getWeekday(today)}</h1>
            <img 
                src={data.avatar}
                alt={data.name}
                className="w-40"
            />
            <ul>
                <li>{data.roles[0]}</li>
                <li>{data.roles[1]}</li>
            </ul>
        </>
    );
}