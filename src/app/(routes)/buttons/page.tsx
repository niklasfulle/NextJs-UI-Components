"use client";
import Beispiel from "@/components/Beispiel";
import Button from "@/components/buttons/Button";

export default function Buttons() {
  return (
    <div className="pt-20 flex justify-center">
      <div className="container pt-12 px-6 md:p-12 h-dvh">
        <div></div>
        <div>
          <Beispiel
            id="test"
            name="Test"
            children={
              <Button
                onClick={() => {}}
                type="secondary"
                children={"Button"}
                color="red"
              />
            }
            code="test"
          />
        </div>
      </div>
    </div>
  );
}
