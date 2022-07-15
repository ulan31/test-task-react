import React from "react";
import { useHistory } from "react-router-dom";
import { useData } from "./DataContext";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/dist";
import { PrimaryButton } from "./components/PrimaryButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is a required field"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
        .required("Last name is a required field"),
    middleName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Middle name should not contain numbers"),
    country: yup
        .string()
        .matches(/^([^0-9]*)$/, "Country should not contain numbers"),

    city: yup
        .string()
        .matches(/^([^0-9]*)$/, "City should not contain numbers"),
});

export const StepOne = () => {
    const { setValues, data } = useData();
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm({
        defaultValues: { firstName: data.firstName, lastName: data.lastName, middleName: data.middleName, country: data.country, city: data.city },
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        history.push("./step2");
        setValues(data);
    };

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                Step 1
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    ref={register}
                    id="firstName"
                    type="text"
                    label="First Name"
                    name="firstName"
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                />
                <Input
                    ref={register}
                    id="lastName"
                    type="text"
                    label="Last Name"
                    name="lastName"
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                />
                <Input
                    ref={register}
                    id="middleName"
                    type="text"
                    label="MiddleName"
                    name="middleName"
                    error={!!errors.middleName}
                    helperText={errors?.middleName?.message}
                />
                <Input
                    ref={register}
                    id="country"
                    type="text"
                    label="Country"
                    name="country"
                    error={!!errors.country}
                    helperText={errors?.country?.message}
                />
                <Input
                    ref={register}
                    id="city"
                    type="text"
                    label="City"
                    name="city"
                    error={!!errors.city}
                    helperText={errors?.city?.message}
                />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    );
};
