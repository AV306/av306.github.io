const aboutBox = document.getElementById( "about-box" );
const projectsBox = document.getElementById( "projects-box" );
const contactBox = document.getElementById( "contact-box" );

const defaultClass = "main blur";

function show( index )
{
    switch ( index )
    {
        case 0:
			aboutBox.class = defaultClass;
			projectsBox.class += " hidden";
			contactBox.class += " hidden";
            break;

        case 1:
			aboutBox.class += " hidden";
			projectsBox.class = defaultClass;
			contactBox.class += " hidden";
			alert( "test" )
            break;

        case 2:
			aboutBox.class += " hidden";
			projectsBox.class += " hidden";
			contactBox.class = defaultClass;
            break;

        default:
            break;
    }
}