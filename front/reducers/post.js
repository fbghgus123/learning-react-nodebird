export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id:1,
            nickname: '호현쓰',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [
            {src: 'https://cdnweb01.wikitree.co.kr/webdata/editor/202009/07/img_20200907161318_5cdf902e.webp'},
            {src: 'https://cdn.gukjenews.com/news/photo/202012/2120746_2115009_156.png'},
            {src: 'https://t1.daumcdn.net/cfile/tistory/995FAB355E4684172D'},
        ],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: 'ㄹㅇㅋㅋ'
        }, {
            User: {
                nickname: 'ㅇㅇ',
            },
            content: '아 ㅋㅋㅋㅋㅋㅋ'
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: '호현'
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
            }
        default:
            return state;
    }
};

export default reducer;