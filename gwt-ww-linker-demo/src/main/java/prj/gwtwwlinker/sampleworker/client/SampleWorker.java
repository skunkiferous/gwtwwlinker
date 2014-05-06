/************************************************************************
 * This is a part of gwtwwlinker project
 * https://github.com/tomekziel/gwtwwlinker
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 **************************************************************************/
package prj.gwtwwlinker.sampleworker.client;

import com.google.gwt.core.client.EntryPoint;

import elemental.events.Event;
import elemental.events.EventListener;
import elemental.events.MessageEvent;
import elemental.js.html.JsDedicatedWorkerGlobalScope;

public final class SampleWorker implements EntryPoint {

    private JsDedicatedWorkerGlobalScope worker;

    /** "self" IS the worker, so just cast self to the right type! */
    private static native JsDedicatedWorkerGlobalScope selfToWorker() /*-{
                                                                      return self;
                                                                      }-*/;

    // Export the brige method when the application is loaded
    @Override
    public void onModuleLoad() {
        worker = selfToWorker();
        worker.addEventListener("message", new EventListener() {
            @Override
            public void handleEvent(final Event evt) {
                if (evt instanceof MessageEvent) {
                    final Object data = ((MessageEvent) evt).getData();
                    if (data instanceof String) {
                        // Only react to expected message types.
                        advancedCalculations((String) data);
                    }
                }
            }
        }, false);
    }

    // here is the core worker calculations method
    private void advancedCalculations(final String params) {
        myPostMessage("----====----");
        myPostMessage("Current timestamp " + System.currentTimeMillis());
        myPostMessage("Received message \"" + params + "\"");
    }

    private void myPostMessage(final String message) {
        worker.postMessage(message);
    }
}
