import { useHomeStyles } from "../../styles/HomeStyles"
import { TweetImageInterface } from "../../store/ducks/tweets/contracts/stateTypes"
import { useTweetsStyles } from "../../styles/TweetsStyles"


interface TweetImagesPropsType {
    images: TweetImageInterface[]
}

export const TweetImages: React.FC<TweetImagesPropsType> = ({images}) => {
    // styles
    const tweetsClasses = useTweetsStyles()
    //
    let imagesCount
    let imagesContainerStyle = tweetsClasses.tweetImages
    if (images.length > 0) {
        imagesCount = images.length
        switch (imagesCount) {
            case 1:
                imagesContainerStyle = tweetsClasses.tweetImages1
                break;
            case 2:
                imagesContainerStyle = tweetsClasses.tweetImages2
                break;
            case 3:
                imagesContainerStyle = tweetsClasses.tweetImages3
                break;
            case 4:
                imagesContainerStyle = tweetsClasses.tweetImages4
                break;
            default:
                imagesContainerStyle = tweetsClasses.tweetImages
                break;
        }
    } else {
        imagesCount = 0
    }
    return (
        <div className={`${tweetsClasses.tweetImages} ${imagesContainerStyle}`}>
            {images.map((image, index) => (<div key={index} className={tweetsClasses.tweetImage} style={{ backgroundImage: `url(${image.cloudinary_url})`, gridArea: `image${index + 1}` }}></div>))}
        </div>
    )
}