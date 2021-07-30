import { SuccessMessagePipe } from "src/app/infy-laptop/success-message.pipe";

describe('Logical | Pipe | successMessagePipe', () => {
  let pipe: SuccessMessagePipe;

  beforeEach(() => {
    pipe = new SuccessMessagePipe();
  })

  it('Verifying the functionality of SuccessMessagePipe', () => {
    let returnValue = pipe.transform(1001);
    expect(returnValue).toBe("Successfully registered with registrationId : 1001")
  })

  it('Verifying the functionality of SuccessMessagePipe', () => {
    let returnValue = pipe.transform(1002);
    expect(returnValue).toBe("Successfully registered with registrationId : 1002")
  })
});