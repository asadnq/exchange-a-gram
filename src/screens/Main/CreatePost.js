import React from 'react'
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements'

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    static navigationOptions = {
        headerRight: (
            <Button title='share' type='clear' onPress/>
        )
    }

    render() {
        return (
            <View>
                <Input placeholder='enter a caption' />
            </View>
        );
    }
}

export default CreatePost;