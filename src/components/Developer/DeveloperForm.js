import classes from "./DeveloperForm.module.css";

const DeveloperForm = () => {

    return(
        <div>
            <div>
                <p>Create/Edit Developer</p>
            </div>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Location" />
                <input type="number" placeholder="Price per hour" />
                <select name="technology">
                    <option value="JavaScript">JavaScript</option>
                    <option value="Java">Java</option>
                    <option value=".Net">.Net</option>
                    <option value="Flutter">Flutter</option>
                    <option value="Python">Python</option>
                    <option value="PHP">PHP</option>
                </select>
                <textarea value="" placeholder="Description" />
                <input type="number" placeholder="Years of experience" />
                <select name="language">
                    <option value="Serbian">Serbian</option>
                    <option value="English">English</option>
                    <option value="Bulgarian">Bulgarian</option>
                </select>
                <input type="text" placeholder="LinkedIn profile url" />

                {/* HERE IS THE PIC IMPORT */}
                <input type="file" placeholder="Name" />
            </form>
        </div>
    );
}

export default DeveloperForm;