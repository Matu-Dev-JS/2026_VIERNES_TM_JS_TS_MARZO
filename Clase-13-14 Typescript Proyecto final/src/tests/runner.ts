export type TestFn = () => void | Promise<void>


export interface TestResult {
    name: string;
    passed: boolean;
    error?: Error; 
    durationMs: number;
}


export interface SuiteResult {
    total: number;
    passed: number;
    failed: number;
    durationMs: number;
    results: TestResult[]
}


const registeredTests: {name: string, fn: TestFn}[] = []


export function test (name: string, fn: TestFn): void{
    registeredTests.push({name, fn})
}

export async function runTests(): Promise<SuiteResult>{
    const results: TestResult[] = []
    let passedCount = 0
    const suiteStart = performance.now()

    for(const test of registeredTests){
        const start = performance.now()
        let passed = true;
        let testError: Error | undefined
        try{
            const result = test.fn()
            if(result instanceof Promise){
                await result
            }
        }
        catch(error){
            passed = false
            testError = error instanceof Error ? error : new Error(String(error))
        }
        const dutarationMs = performance.now() - start
        if(passed){
            passedCount++
        }

        results.push({
            name: test.name,
            passed,
            error: testError,
            durationMs: dutarationMs
        })
    }

    const suiteDuration = performance.now() - suiteStart;

    return {
        total: registeredTests.length,
        passed: passedCount,
        failed: registeredTests.length - passedCount,
        durationMs: suiteDuration,
        results
    }
}