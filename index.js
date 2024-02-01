const aboutBox = document.getElementById( "about-box" );
const projectsBox = document.getElementById( "projects-box" );
const contactBox = document.getElementById( "contact-box" );


function show( index )
{
    switch ( index )
    {
        case 0:
			aboutBox.classList.remove( "hidden" );
			projectsBox.classList.add( "hidden" );
			contactBox.classList.add( "hidden" );
            break;

        case 1:
			aboutBox.classList.add( "hidden" );
			projectsBox.classList.remove( "hidden" );
			contactBox.classList.add( "hidden" );
            break;

        case 2:
			aboutBox.classList.add( "hidden" );
			projectsBox.classList.add( "hidden" );
			contactBox.classList.remove( "hidden" );
            break;

        default:
            break;
    }
}