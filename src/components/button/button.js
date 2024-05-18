import '../button/button.css';

export default ({children, onClick}) => {
    return (
        <button className='button' onClick={onClick}>{children}</button>
    )
}