import {
    Create,
    SimpleForm,
    TextInput,
    TimeInput,
    CheckboxGroupInput,
    ArrayInput,
    SelectInput,
    SimpleFormIterator,
    RaRecord,
    required,
    minLength,
    useDataProvider,
} from "react-admin";
import Typography from "@mui/material/Typography";

const StandupCreate = () => {

    return (
        <Create>
            <SimpleForm>
                <Typography
                    variant="h6"
                    sx={{
                        p: 2,
                        alignSelf: "center",
                        color: "rgb(77, 77, 77)",
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        fontSize: "h5.fontSize",
                    }}
                >
                    Create Standup
                </Typography>
            </SimpleForm>
        </Create>
    );
};

export default StandupCreate;
