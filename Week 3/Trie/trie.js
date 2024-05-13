class TrieNode{
    constructor(){
        this.children ={}
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }

           node= node.children[char]
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                console.log(word + ' - Not present in Trie');
                return; // Exit early if the character is not found
            }
            node = node.children[char];
        }
        if (node.isEnd) {
            console.log(word + ' - Present in Trie');
        } else {
            console.log(word + ' - Not present in Trie');
        }
    }
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                console.log(prefix + ' - Not present as prefix in Trie');
                return; // Exit early if the character is not found
            }
            node = node.children[char];
        }
        console.log(prefix + ' - Present as prefix in Trie');
    }
}



const trie = new Trie()
trie.insert('abl')
trie.search('able')

trie.insert('Irfaan')
trie.search('Irfaan')
trie.startsWith('I')
trie.startsWith('C')
