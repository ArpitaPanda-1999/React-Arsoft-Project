const Home = () => {
    return(
        <div className="container">
            <h1 className="pb-4 pt-5">Home</h1>
            <p>
                Ensure correct role and provide a label
            </p>
            <p>
                In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, this would be role="group", while toolbars should have a role="toolbar".
            </p>
            <p>
                In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use aria-label, but alternatives such as aria-labelledby can also be used.
            </p>
        </div>
    )
}

export default Home;