
import Picker, { IEmojiData } from 'emoji-picker-react';
import { Dispatch, RefObject, SetStateAction, useCallback, useEffect, useRef } from 'react';
import { useCommonStyles } from '../../../styles/CommonStyles';

interface PickerElementPropsType {
    setPickerVisible: Dispatch<SetStateAction<boolean>>;
    onEmojiClick: (_: any, emojiObject: IEmojiData) => void;
    pickerRef: RefObject<HTMLHeadingElement>;
}

export const PickerElement: React.FC<PickerElementPropsType> = ({setPickerVisible, onEmojiClick, pickerRef}) => {
    const handleClickOutside = useCallback((event) => {
        if (pickerRef.current && !pickerRef.current.contains(event.target)) {
            setPickerVisible(false)
        }
    }, [])

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])
    return (
        <div>
            <Picker
                    pickerStyle={{
                        position: 'absolute',
                        zIndex: '100',
                    }}
                    onEmojiClick={onEmojiClick}
                    disableSearchBar
                    groupVisibility={{
                        smileys_people: true,
                        animals_nature: false,
                        food_drink: false,
                        travel_places: false,
                        activities: false,
                        objects: false,
                        symbols: false,
                        recently_used: false,
                        flags: false,
                    }} />
        </div>
    )
}