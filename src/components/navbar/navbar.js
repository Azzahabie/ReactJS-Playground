import {StyledNav,StyledLiFloatRight,StyledLi,StyledUL} from './navbar.elements'

const Navbar = (props) => {
    return (
        <StyledNav>
            <StyledUL>
                <StyledLi><h2>Logo</h2></StyledLi>
                <StyledLiFloatRight><h3>OtherLOGO</h3></StyledLiFloatRight>
                <input id="testInput" type="text"></input>
                <button onClick={props.getUser}>test</button>
            </StyledUL>
        </StyledNav>
    )
}

export default Navbar

