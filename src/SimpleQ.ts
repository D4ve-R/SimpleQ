/**
 * Simple Implenetation of a Queue
 */
 export default class SimpleQ<ItemType> {
    private itemCount: number;
    private queue: ItemType[];

    constructor(){
        this.itemCount = 0;
        this.queue = [];
    }

    /**
     * Adds a new item to queue and updates itemCount to new length of queue
     * @param item added to queue
     */
    add(item: ItemType): void {
        this.itemCount = this.queue.push(item);
    }

    /**
     * Removes appropriate item from queue
     * @returns removed item or null if queue is empty
     */
    remove(): ItemType | null {
        let item = null;
        try{
            if(this.itemCount === 0) throw new Error("Queue is empty!");

            let tmp = this.queue.shift();
            if(tmp === undefined) throw new Error("Undefined item, queue is empty!");

            item = tmp;
            this.itemCount--;
        } catch(e) {
            console.error(e);
        } finally {
            return item;
        }
    }

    /**
     * Checks if queue is empty
     * @returns true if queue is empty, else false
     */
    isEmpty(): boolean {
        return this.itemCount === 0;
    }

    /**
     * Get length of the queue
     * @returns number of items in the queue
     */
    length(): number {
        return this.itemCount;
    }

    /**
     * @see add()
     * @param item 
     */
    enqueue(item: ItemType): void {
        this.add(item);
    }

    /**
     * @see remove()
     * @returns 
     */
    dequeue(): ItemType | null {
        return this.remove();
    }
}