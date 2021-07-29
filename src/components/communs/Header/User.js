import { ChevronDownSharp, ChevronUpSharp } from 'react-ionicons';
import { useState } from 'react';
import { Menu, CloseMenu } from './HeaderStyles';
import { useHistory } from 'react-router';

export default function User(){
    const [openMenu, setOpenMenu] = useState(false);
    let history = useHistory();
    return(
        <>
        <div className="user" onClick={() => setOpenMenu(!openMenu)}>
            <ChevronDownSharp
                color={'#b2b6b8'} 
                height="30px"
                width="30px"
                style={{
                    cursor: 'pointer',
                    display: `${openMenu? 'none': 'block'}`
                }}
            />
            <ChevronUpSharp
                color={'#b2b6b8'} 
                height="30px"
                width="30px"
                style={{
                    cursor: 'pointer',
                    display: `${!openMenu? 'none': 'block'}`
                }}
            />
            <img src="https://i.pinimg.com/736x/47/b9/79/47b97903c3867b10067f60c3d5bec300.jpg" alt="stitch"/>
        </div>
        <Menu open={openMenu}>
            <p className="mobile" onClick={() => goToPage("submit")}>Submeter</p>
            <p className="mobile" onClick={() => goToPage("/test")}>Provas</p>
            <p className="mobile" onClick={() => goToPage("/contact")}>Contato</p>
            <p onClick={() => goToPage("/")}>Perfil</p>
            <p onClick={() => goToPage("/")}>Sair</p>
        </Menu>
        <CloseMenu open={openMenu} onClick={() => setOpenMenu(!openMenu)}/>
        </>
    )
    function goToPage(route){
        setOpenMenu(false);
        history.push(`${route}`)
    }
}