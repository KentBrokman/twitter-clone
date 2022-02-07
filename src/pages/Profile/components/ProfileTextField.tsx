import TextField from "@material-ui/core/TextField"
import { ChangeEventHandler, useCallback, useEffect, useRef, useState } from "react"
import { Control, Controller, FieldPathWithValue } from "react-hook-form"
import { UpdateProfileObjType } from "../../../store/ducks/user/contracts/stateTypes"

import { useProfileStyles } from "../../../styles/ProfileStyles"


interface ProfileTextFieldProps {
    name: FieldPathWithValue<UpdateProfileObjType, string, "fullName" | "about" | "location" | "website">;
    control: Control<UpdateProfileObjType, object>;
    defaultValue: string | undefined;
    maxInputLength: number;
    label: string;
    rows?: number;
    multiline?: boolean;
}

export const ProfileTextField: React.FC<ProfileTextFieldProps> = ({ maxInputLength, name, control, defaultValue, label, rows = 1, multiline = false }) => {
    // styles
    const profileStyles = useProfileStyles()
    //
    // local state
    const [editMode, setEditMode] = useState(false)
    const textField = useRef<HTMLInputElement>(null)
    const [inputLength, setInputLength] = useState(defaultValue?.length || 0)
    //
    const textFieldOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget) {
            setInputLength(event.currentTarget.value.length)
        }
    }
    const onFocusHandler = useCallback(() => {
        setEditMode(true)
    }, [])
    const outFocusHandler = useCallback(() => {
        setEditMode(false)
    }, [])
    useEffect(() => {

        if (textField.current) {
            textField.current.addEventListener('focus', onFocusHandler)
            textField.current.addEventListener('focusout', outFocusHandler)
        }

        return () => {
            if (textField.current) {
                textField.current.removeEventListener('focus', onFocusHandler)
                textField.current.removeEventListener('focusout', outFocusHandler)
            }
        }
    }, [])
    return (
        <div className={profileStyles.profileEditCard_form_textField}>
            {editMode &&
                <div id='counter'>{inputLength} / {maxInputLength}</div>
            }
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue || ""}
                render={({ field: { onChange, value }, fieldState: { error } }) => <TextField
                    value={value}
                    label={label}
                    variant="outlined"
                    rows={rows}
                    multiline={multiline}
                    fullWidth
                    defaultValue={defaultValue || ""}
                    inputRef={textField}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        textFieldOnChange(e)
                        onChange(e)
                    }}
                    inputProps={{
                        maxlength: maxInputLength
                    }}
                />}
            />
            {/* <TextField label={label}
                variant="outlined"
                rows={rows}
                multiline={multiline}
                fullWidth
                inputRef={textField}
                onChange={textFieldOnChange}
                inputProps={{
                    maxlength: maxInputLength
                }}
            /> */}
        </div>
    )
}