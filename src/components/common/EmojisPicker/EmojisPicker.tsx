import IconButton from "@material-ui/core/IconButton";
import Emojy from '@material-ui/icons/SentimentSatisfied';
import Picker, { IEmojiData } from 'emoji-picker-react';
import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { useCommonStyles } from "../../../styles/CommonStyles";
import { PickerElement } from "./Picker";


interface EmojisPickerPropsType {
    text: string;
    setText: Dispatch<SetStateAction<string>>
}

export const EmojisPicker: React.FC<EmojisPickerPropsType> = ({ text, setText }) => {
    // styles
    const commonClasses = useCommonStyles()
    //
    // local state
    const [pickerVisible, setPickerVisible] = useState(false)
    const pickerRef = useRef<HTMLHeadingElement>(null)
    //
    // handlers
    const onButtonClick = () => {
        setPickerVisible(!pickerVisible)
    }
    const onEmojiClick = (_: any, emojiObject: IEmojiData) => {
        setText(text + emojiObject.emoji)
    }
    //
    return (
        <div
            className={commonClasses.emojisPickerWrapper}
            ref={pickerRef}
        >
            <IconButton onClick={onButtonClick}>
                <Emojy color='primary' style={{ fontSize: '20px' }} />
            </IconButton>
            {pickerVisible &&
                <PickerElement setPickerVisible={setPickerVisible} onEmojiClick={onEmojiClick} pickerRef={pickerRef}/>}
        </div>
    )
} 