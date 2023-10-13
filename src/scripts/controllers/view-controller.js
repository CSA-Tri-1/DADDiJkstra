class ViewController extends Controller {
    startListening() {
        const { paper } = this.context;

        this.listenTo(paper, {
            'element:pointerdown': selectSource,
            'element:mouseenter': selectEnd,
            'element:mouseleave': hidePathOnMouseLeave,
        });
    }
}

function selectSource({ setStartView }, elementView) {
    setStartView(elementView);
}

function selectEnd({ showPath, setEndView, getStartView, getEndView }, elementView) {
    const pathStartView = getStartView();
    const pathEndView = getEndView();

    if (elementView === pathStartView) return;
    if (pathStartView && pathEndView) {
        joint.highlighters.addClass.remove(pathStartView, invalidPathHighlightId);
        joint.highlighters.addClass.remove(pathEndView, invalidPathHighlightId);
    }
    setEndView(elementView);
    showPath();
}

function hidePathOnMouseLeave({ hidePath, getStartView, getEndView, setEndView }) {
    const pathStartView = getStartView();
    const pathEndView = getEndView();

    hidePath();
    if (pathStartView) joint.highlighters.addClass.remove(pathStartView, invalidPathHighlightId);
    if (pathEndView) joint.highlighters.addClass.remove(pathEndView, invalidPathHighlightId);
    setEndView(null);
}
