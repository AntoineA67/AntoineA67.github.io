import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'test',
    Board: () => <div></div>,
    environmentProps: {
        canvasWidth: 397
    }
});
