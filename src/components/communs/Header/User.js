import { ChevronDownSharp, ChevronUpSharp } from 'react-ionicons';
import { useState } from 'react';
import { Menu, CloseMenu, SelectTest } from './HeaderStyles';
import { useHistory } from 'react-router';

export default function User(){
    const [openMenu, setOpenMenu] = useState(false);
    const [select, setSelect] = useState(false);

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
            <p className="mobile" onClick={() => goToPage("/submit")}>Submeter</p>
            <p className="mobile" onClick={() => {setSelect(true); setOpenMenu(!openMenu)}}>Provas</p>
            <p className="mobile" onClick={() => goToPage("/contact")}>Contato</p>
            <p onClick={() => goToPage("/")}>Perfil</p>
            <p onClick={() => goToPage("/")}>Sair</p>
        </Menu>
        <CloseMenu open={openMenu} onClick={() => setOpenMenu(!openMenu)}/>
        <SelectTest open={select} onClick={(e) => setSelect(false)}>
                <div onClick={(e) => e.stopPropagation()}>
                    <p>Ordenar por:</p>
                    <span>
                        <button onClick={(e) => goToTest(e, "subject")}>Disciplina</button>
                        <button onClick={(e) => goToTest(e, "professor")}>Professor</button>
                    </span>
                </div>
        </SelectTest>
        </>
    )
    function goToPage(route){
        setOpenMenu(false);
        history.push(`${route}`)
    }
    function goToTest(e, type){
        e.stopPropagation();
        setSelect(false)
        history.push(`/test/${type}`)
    }
}