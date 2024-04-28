interface TextEditorMemento {
    getState(): string;
}

class ConcreteTextEditorMemento implements TextEditorMemento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    getState(): string {
        return this.state;
    }
}

class TextEditor {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    getContent(): string {
        return this.content;
    }

    setContent(content: string): void {
        this.content = content;
    }

    saveToMemento(): TextEditorMemento {
        return new ConcreteTextEditorMemento(this.content);
    }

    restoreFromMemento(memento: TextEditorMemento): void {
        this.content = memento.getState();
    }
}

class Caretaker {
    private mementos: TextEditorMemento[] = [];
    private currentIndex: number = -1;

    constructor(private textEditor: TextEditor) { }

    public save(): void {
        const memento = this.textEditor.saveToMemento();
        this.mementos.push(memento);
        this.currentIndex = this.mementos.length - 1;
    }

    public undo(): void {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            const memento = this.mementos[this.currentIndex];
            this.textEditor.restoreFromMemento(memento);
        }
    }

    public redo(): void {
        if (this.currentIndex < this.mementos.length - 1) {
            this.currentIndex++;
            const memento = this.mementos[this.currentIndex];
            this.textEditor.restoreFromMemento(memento);
        }
    }
}

const textEditor = new TextEditor("Initial content");
const caretaker = new Caretaker(textEditor);

caretaker.save();
textEditor.setContent("Updated content");

caretaker.save();
textEditor.setContent("More changes");

caretaker.save();
textEditor.setContent("Even more changes");

console.log("Current content:", textEditor.getContent());

caretaker.undo();
console.log("Undone content:", textEditor.getContent());

caretaker.undo();
console.log("Undone content:", textEditor.getContent());

caretaker.redo();
console.log("Redone content:", textEditor.getContent());

caretaker.redo();
console.log("Redone content:", textEditor.getContent());